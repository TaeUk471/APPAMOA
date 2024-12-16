"use client";

import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import React, { useRef, useState } from "react";

import { processPDF } from "@utils/processPDF";

if (typeof window !== "undefined") {
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

interface UploadPDFProps {
  mode: "single" | "multiple";
  pageId?: string;
  pdfToMemberMapping?: Record<string, string>;
}

const UploadPDF = ({ mode, pageId, pdfToMemberMapping }: UploadPDFProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [pdfInfo, setPdfInfo] = useState<{ url: string; numPages: number } | null>(null);
  const [specificPage, setSpecificPage] = useState<string>("");

  const handleFilesUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    if (mode === "single") {
      const pdfDocument = await getDocument(url).promise;
      setPdfInfo({ url, numPages: pdfDocument.numPages });
    } else if (mode === "multiple" && pdfToMemberMapping) {
      const files = Array.from(event.target.files);
      for (const file of files) {
        const fileName = file.name.replace(/\.pdf$/, "");
        console.log("filenmae", fileName);
        const fileIndex = parseInt(fileName, 10);
        if (isNaN(fileIndex)) {
          console.warn(`파일 이름 "${file.name}"에서 숫자를 추출하지 못했습니다.`);
          continue;
        }
        const mappedPageId = pdfToMemberMapping[fileIndex.toString()];
        if (mappedPageId) {
          const fileUrl = URL.createObjectURL(file);
          console.log(`Processing PDF with ID: ${mappedPageId}`);
          await processPDF(fileUrl, mappedPageId);
        } else {
          console.warn(`PDF "${file.name}"에 해당하는 매핑 ID가 없습니다.`);
        }
      }
    }
  };

  const handleRenderAllPages = async () => {
    if (!pdfInfo || !pageId) {
      alert("PDF가 선택되지 않았거나 pageId가 없습니다.");
      return;
    }

    for (let i = 1; i <= pdfInfo.numPages; i++) {
      await processPDF(pdfInfo.url, pageId, i);
    }
    clearPDFInfo();
  };

  const handleRenderSpecificPage = async () => {
    if (!pdfInfo || !pageId || !specificPage) {
      alert("PDF와 페이지 번호를 선택해주세요.");
      return;
    }

    const pageNum = parseInt(specificPage, 10);
    if (pageNum < 1 || pageNum > pdfInfo.numPages) {
      alert(`유효한 페이지 번호를 입력해주세요. (1-${pdfInfo.numPages})`);
      return;
    }

    await processPDF(pdfInfo.url, pageId, pageNum);
    clearPDFInfo();
  };

  const clearPDFInfo = () => {
    setPdfInfo(null);
    setSpecificPage("");
  };

  return (
    <div className="fixed left-0 top-[330px] w-14 h-fit flex flex-col">
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf"
        onChange={handleFilesUpload}
        multiple={mode === "multiple"}
        className="hidden"
      />

      <div className="cursor-pointer">
        <button onClick={() => fileInputRef.current?.click()}>
          <i className="fa-regular fa-file-pdf bg-pink-300 px-[12px] py-4 rounded-r-lg" />
        </button>
      </div>

      {mode === "single" && pdfInfo && (
        <div className="absolute left-[50px] top-[-20px] flex flex-col items-center space-y-4">
          <button
            onClick={handleRenderAllPages}
            className="bg-purple-500 hover:bg-purple-600 text-white text-center px-4 py-2 rounded-lg shadow-md w-24">
            All
          </button>

          <div className="flex flex-col items-center space-y-2 bg-purple-500 hover:bg-purple-600 rounded-2xl shadow-md">
            <input
              type="text"
              placeholder={`Enter page (1-${pdfInfo.numPages})`}
              value={specificPage}
              onChange={e => setSpecificPage(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-32"
            />
            <button onClick={handleRenderSpecificPage} className=" text-white px-4 py-2">
              Choose
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPDF;
