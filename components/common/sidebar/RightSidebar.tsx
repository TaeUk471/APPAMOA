//코드 분리 필요
"use client";

import Image from "next/image";
import { useEffect } from "react";

import Button from "@components/button/Button";
import useExportPDFStore from "store/useExportPDFStore";
import usePaginationStore from "store/usePaginationStore";

import InputSidebar from "./InputSidebar/InputSidebar";

const RightSidebar = ({ pageId }: { pageId: string }) => {
  const pages = usePaginationStore(state => state.pages);
  const handleExportPDF = useExportPDFStore(state => state.handleExportPDF);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];

  useEffect(() => {
    console.log(pageId);
  }, []);

  return (
    <div className="relative">
      <InputSidebar />
      <div className="fixed bottom-40 right-0 pl-[14px] pr-3 py-2 bg-stone-700 rounded-l-full">
        <Button size={"xl"} isLoading={false} color="primary" onClick={() => handleExportPDF(currentPage)}>
          <Image src={"/icons/pdf.png"} alt="PDF출력" width={30} height={30} />
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
