"use client";

import { GlobalWorkerOptions } from "pdfjs-dist";
import React, { useRef } from "react";

import { processPDF } from "@utils/processPDF";

if (typeof window !== "undefined") {
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

interface UploadPDFProps {
  mode: "single" | "multiple";
  pageId?: string;
  pdfToMemberMapping?: Record<number, string>;
}

const UploadPDF = ({ mode, pageId, pdfToMemberMapping }: UploadPDFProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const { isOpen, open, close, toggle } = useToggle(false);

  const handleFilesUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);

    if (mode === "single") {
      if (!pageId) {
        console.error("pageId가 필요합니다.");
        return;
      }

      const url = URL.createObjectURL(files[0]);
      await processPDF(url, pageId);
    } else if (mode === "multiple") {
      if (!pdfToMemberMapping) {
        console.error("pdfToMemberMapping이 필요합니다.");
        return;
      }

      for (const [index, file] of files.entries()) {
        const url = URL.createObjectURL(file);
        const mappedPageId = pdfToMemberMapping[index + 1];
        if (mappedPageId) {
          await processPDF(url, mappedPageId);
        } else {
          console.warn(`PDF ${index + 1}에 해당하는 회원번호가 없습니다.`);
        }
      }
    }
  };

  return (
    <div className="fixed left-0 top-[330px] w-14 h-fit flex flex-col">
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf"
        multiple={mode === "multiple"}
        onChange={handleFilesUpload}
        className="hidden"
      />
      <div className="cursor-pointer ">
        {mode === "single" ? (
          <button onClick={() => fileInputRef.current?.click()}>
            <i className="fa-regular fa-file-pdf bg-pink-300 px-[12px] py-4 rounded-r-lg" />
          </button>
        ) : (
          <button onClick={() => fileInputRef.current?.click()}>
            <i className="fa-regular fa-file-pdf bg-purple-300 px-[12px] py-4 rounded-r-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadPDF;
