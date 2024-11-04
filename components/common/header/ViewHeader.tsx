"use client";

import Button from "@components/button/Button";
// import useEditStore from "store/useEditStore";
import useExportPDFStore from "store/useExportPDFStore";
import usePaginationStore from "store/usePaginationStore";

import Pagination from "../Pagination";

const EditHeader = () => {
  const pages = usePaginationStore(state => state.pages);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const handleExportPDF = useExportPDFStore(state => state.handleExportPDF);
  const currentPage = pages[currentPageIndex];

  return (
    <>
      <div className="flex items-center justify-between h-[70px] shadow-md p-4 border-t-4 border-purple-800 bg-red-100">
        <div className="flex gap-6">
          <div className="border-2 border-black p-3 rounded-md">로고</div>
          <Button size={"s"} color={"primary"} isLoading={false}>
            편집 기능
          </Button>
        </div>
        <Pagination />
        <div className="flex gap-6">
          <Button size={"s"} color={"primary"} isLoading={false}>
            미리보기
          </Button>
          <Button size={"s"} color={"primary"} isLoading={false} onClick={() => handleExportPDF(currentPage)}>
            pdf 출력하기
            {/* 이후에 전체 PDF 출력으로 변경해야함 */}
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditHeader;
