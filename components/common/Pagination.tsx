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
  const range = 2; // 화면 앞뒤로 보여줄 범위

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
    <nav>
      <ul className="flex gap-2 mt-3">
        <button className="px-4 py-4 border rounded-lg" onClick={() => decrease()}>
          {"-"}
        </button>
        <button
          className="px-4 py-4 border rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePage(currentPage - 1)}>
          {"<"}
        </button>
        {pageList.map((page, index) => (
          <li key={index} className={`text-lg ${page === currentPage ? "text-blue-400" : ""}`}>
            {typeof page === "number" ? (
              <button onClick={() => handlePage(page)} className="px-4 py-2">
                {page}
              </button>
            ) : (
              <span className="px-4 py-2">{page}</span>
            )}
          </li>
        ))}
        <button
          className="px-4 py-4 border rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPage}
          onClick={() => handlePage(currentPage + 1)}>
          {">"}
        </button>
        <button className="px-4 py-4 border rounded-lg" onClick={() => increase()}>
          {"+"}
        </button>
      </ul>
    </nav>
  );
}
