"use client";

import usePaginationStore from "store/usePaginationStore";

interface PaginationProps {
  pageId: string;
}

export default function Pagination({ pageId }: PaginationProps) {
  const currentPage = usePaginationStore(state => state.currentPage[pageId] || 1);
  const setPage = usePaginationStore(state => state.setCurrentPage);
  const increase = usePaginationStore(state => state.increaseTotalPage);
  const decrease = usePaginationStore(state => state.decreaseTotalPage);
  const totalPage = usePaginationStore(state => state.totalPage);

  const pageList = []; // 화면에 렌더링할 페이지 리스트
  const range = 1; // 화면 앞뒤로 보여줄 범위

  const handlePage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPage && newPage !== currentPage) {
      setPage(pageId, newPage);
    }
  };

  for (let i = 1; i <= totalPage; i++) {
    if (i === 1 || i === totalPage || (i >= currentPage - range && i <= currentPage + range)) {
      pageList.push(i);
    } else if (pageList[pageList.length - 1] !== "...") {
      pageList.push("...");
    }
  }

  return (
    <nav className="flex w-[450px] items-center justify-between gap-4">
      <button
        className="w-[36px] h-[36px] text-center border bg-white cursor-pointer rounded-lg"
        onClick={() => decrease()}>
        {"-"}
      </button>
      <ul className="flex gap-2 justify-between w-[360px]">
        <button
          className="w-[36px] h-[36px] text-center border bg-white cursor-pointer rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePage(currentPage - 1)}>
          &laquo;
        </button>
        <div className="flex gap-2">
          {pageList.map((page, index) => (
            <li key={index} className={`text-lg font-black  text- ${page === currentPage ? "text-blue-600" : ""}`}>
              {typeof page === "number" ? (
                <button
                  onClick={() => handlePage(page)}
                  className="w-[36px] h-[36px] text-center border bg-white cursor-pointer rounded-lg">
                  {page}
                </button>
              ) : (
                <span className="flex px-4 py-2 text-center">{page}</span>
              )}
            </li>
          ))}
        </div>{" "}
        <button
          className="w-[36px] h-[36px] text-center border bg-white cursor-pointer rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPage}
          onClick={() => handlePage(currentPage + 1)}>
          &raquo;
        </button>
      </ul>
      <button
        className="w-[36px] h-[36px] text-center border bg-white cursor-pointer rounded-lg"
        onClick={() => increase()}>
        {"+"}
      </button>
    </nav>
  );
}
