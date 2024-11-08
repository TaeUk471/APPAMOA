import useToggle from "@hooks/useToggle";

const InputSidebar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(); // 사이드바용 토글 상태
  return (
    <div
      className={`bg-purple-700 fixed top-25 right-0 transition-all
    ${isSidebarOpen ? "w-[400px] h-5/6 top-[75px] bg-purple-400" : "w-14 h-fit top-[80px]"} px-4 py-3 rounded-l-xl flex flex-col`}>
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
  );
};

export default InputSidebar;
