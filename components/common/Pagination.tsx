"use client";

import { useEffect } from "react";

import User1 from "constant/DummyUser";
import usePaginationStore from "store/usePaginationStore";

export default function Pagination() {
  const pages = usePaginationStore(state => state.pages);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const setCurrentPageIndex = usePaginationStore(state => state.setCurrentPageIndex);
  const addPage = usePaginationStore(state => state.addPage);
  const removeLastPage = usePaginationStore(state => state.removeLastPage);

  const totalPage = pages.length;
  const currentPage = pages[currentPageIndex];
  const range = 1;

  const handlePageChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < totalPage) {
      setCurrentPageIndex(newIndex);
    }
  };

  const pageList = [];
  for (let i = 1; i <= totalPage; i++) {
    if (i === 1 || i === totalPage || (i >= currentPageIndex + 1 - range && i <= currentPageIndex + 1 + range)) {
      pageList.push(i);
    } else if (pageList[pageList.length - 1] !== "...") {
      pageList.push("...");
    }
  }

  useEffect(() => {
    console.log("Current Page State:", currentPage);
    console.log("Complete currentPage object:", usePaginationStore.getState());
    console.log("Current page index:", currentPageIndex);
  }, [currentPage]);

  return (
    <nav className="flex w-[450px] items-center justify-between gap-4">
      <button className="btn-common btn-hover" onClick={removeLastPage}>
        {"-"}
      </button>
      <ul className="flex gap-2 justify-between w-[360px]">
        <button
          className="btn-common btn-hover disabled:opacity-50"
          disabled={currentPageIndex === 0}
          onClick={() => handlePageChange(currentPageIndex - 1)}>
          &laquo;
        </button>
        <div className="flex gap-2">
          {pageList.map((page, index) => (
            <li key={index} className={`text-lg font-black ${page === currentPageIndex + 1 ? "text-orange-800" : ""}`}>
              {typeof page === "number" ? (
                <button onClick={() => handlePageChange(page - 1)} className="btn-common btn-hover shadow-md">
                  {page}
                </button>
              ) : (
                <span className="flex px-4 py-2 text-center">{page}</span>
              )}
            </li>
          ))}
        </div>
        <button
          className="btn-common btn-hover disabled:opacity-50"
          disabled={currentPageIndex === totalPage - 1}
          onClick={() => handlePageChange(currentPageIndex + 1)}>
          &raquo;
        </button>
      </ul>
      <button className="btn-common btn-hover" onClick={() => addPage(User1.name, User1.date)}>
        {"+"}
      </button>
    </nav>
  );
}
