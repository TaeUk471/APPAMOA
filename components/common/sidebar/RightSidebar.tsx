//코드 분리 필요
"use client";

import Image from "next/image";

import Button from "@components/button/Button";
import useExportPDFStore from "store/useExportPDFStore";

import InputSidebar from "./InputSidebar/InputSidebar";

const RightSidebar = ({ pageId }: { pageId: string }) => {
  const handleExportCurrentPagePDF = useExportPDFStore(state => state.handleExportCurrentPagePDF);
  const handleExportAllPagesPDF = useExportPDFStore(state => state.handleExportAllPagesPDF);

  return (
    <div className="relative">
      <InputSidebar pageId={pageId} />
      <div className="fixed bottom-40 right-0 flex flex-col space-y-4 pl-[14px] pr-3 py-2 bg-stone-700 rounded-l-full">
        <Button size={"xl"} isLoading={false} color="primary" onClick={() => handleExportCurrentPagePDF(pageId)}>
          <Image src={"/icons/pdf.png"} alt="현재 페이지 PDF" width={30} height={30} />
        </Button>
        <Button size={"xl"} isLoading={false} color="primary" onClick={handleExportAllPagesPDF}>
          <i className="fa fa-pdf w-10 h-10" />
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
