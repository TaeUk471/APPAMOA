"use client";

import { useEffect } from "react";

import useToggle from "@hooks/useToggle";
import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";

const InputSidebar = ({ pageId }: { pageId: string }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(); // 사이드바용 토글 상태
  const pages = usePageDataStore(state => state.pages);
  const pageData = pages[pageId];
  const selectedComponentId = useSelectionStore(state => state.selectedComponentId) || "";
  const updateComponent = usePageDataStore(state => state.updateComponent);

  const handleUpdateComponent = () =>
    updateComponent(pageId, "textareaSet", selectedComponentId, { x: 200, y: 300, content: "dasdfasdf" });

  useEffect(() => {
    console.log(selectedComponentId, pageData);
  }, []);

  return (
    <div className="relative">
      {/* ElementSidebar */}
      <div
        className={`bg-purple-900 fixed top-25 right-0 transition-all
        ${isSidebarOpen ? "w-[400px] h-5/6" : "w-14 h-fit top-[80px]"} flex flex-col`}>
        <div className={"flex justify-between items-center p-4"}>
          <button onClick={toggleSidebar} className="cursor-pointer flex items-center justify-center h-8">
            {isSidebarOpen ? <i className="fas fa-times text-white" /> : <i className="fas fa-bars text-white" />}
          </button>
        </div>
        {isSidebarOpen && (
          <div
            className={"flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200"}>
            <button className="fa p-4 cursor-pointer border-2 text-white bg-pink-200" onClick={handleUpdateComponent}>
              내가 바꿔볼게!
            </button>
          </div>
        )}
        {/* Footer */}
        {isSidebarOpen && (
          <div className="flex gap-4 p-4 bg-blue-500 text-white">
            <i className="fas fa-user text-white" />
            <p>Footer Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSidebar;
