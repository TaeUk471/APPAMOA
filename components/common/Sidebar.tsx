"use client";

import useToggle from "@hooks/useToggle";

import HospitalGrid from "./hospital/HospitalGrid";

const Sidebar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(); // 사이드바용 토글 상태
  const { isOpen: isImageOpen, toggle: toggleImage } = useToggle(); // 이미지 아이콘용 토글 상태

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-purple-900 fixed top-25 right-0 transition-all
        ${!isSidebarOpen ? "w-[400px] h-5/6" : "w-14 h-fit top-[80px]"} flex flex-col`}>
        <div className={"flex justify-between items-center p-4"}>
          {/* 첫 번째 버튼 */}
          {!isSidebarOpen && (
            <button onClick={toggleImage}>
              <i
                className={`fas fa-images text-white border-3 rounded-lg p-4 ${
                  isImageOpen ? "shadow-innerShadow" : ""
                }`}
              />
            </button>
          )}
          {/* 두 번째 버튼 */}
          <button onClick={toggleSidebar} className="cursor-pointer flex items-center justify-center h-8">
            {isSidebarOpen ? <i className="fas fa-bars text-white" /> : <i className="fas fa-times text-white" />}
          </button>
        </div>
        {!isSidebarOpen && (
          <div
            className={"flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200"}>
            {/* Sidebar Content */}
            {isImageOpen ? <HospitalGrid /> : <p className="text-white">Input Elements (조작용)</p>}
          </div>
        )}
        {/* Footer */}
        {!isSidebarOpen && (
          <div className="flex gap-4 p-4 bg-blue-500 text-white">
            <i className="fas fa-user text-white" />
            <p>Footer Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
