//코드 분리 필요
"use client";

import Image from "next/image";
import { useEffect } from "react";

import Button from "@components/button/Button";
import useToggle from "@hooks/useToggle";
import useExportPDFStore from "store/useExportPDFStore";
import usePaginationStore from "store/usePaginationStore";

const InputSidebar = ({ pageId }: { pageId: string }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(); // 사이드바용 토글 상태
  const pages = usePaginationStore(state => state.pages);
  const handleExportPDF = useExportPDFStore(state => state.handleExportPDF);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];

  useEffect(() => {
    console.log(pageId);
  }, []);

  return (
    <div className="relative">
      {/* ElementSidebar */}
      <div
        className={`bg-purple-700 fixed top-25 right-0 transition-all
        ${isSidebarOpen ? "w-[400px] h-5/6 top-[75px]" : "w-14 h-fit top-[80px]"} px-4 py-3 rounded-l-xl flex flex-col`}>
        <div className={"flex justify-between items-center"}>
          <button onClick={toggleSidebar} className="cursor-pointer flex items-center justify-center h-8">
            {isSidebarOpen ? <i className="fas fa-times text-white" /> : <i className="fas fa-bars text-white" />}
          </button>
        </div>
        {isSidebarOpen && (
          <div
            className={"flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200"}
          />
        )}
        {/* Footer */}
        {isSidebarOpen && (
          <div className="flex gap-4 p-4 bg-blue-500 text-white">
            <i className="fas fa-user text-white" />
            <p>Footer Content</p>
          </div>
        )}
      </div>
      <div className="fixed bottom-40 right-0 pl-[14px] pr-3 py-2 bg-stone-700 rounded-l-full">
        <Button size={"xl"} isLoading={false} color="primary" onClick={() => handleExportPDF(currentPage)}>
          <Image src={"/icons/pdf.png"} alt="PDF출력" width={30} height={30} />
        </Button>
      </div>
    </div>
  );
};

export default InputSidebar;
