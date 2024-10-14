"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-pink-400 fixed top-25 right-0 transition-all
        ${isOpen ? "w-[400px] h-5/6" : "w-14 h-fit"} flex flex-col`}>
        <div className={`flex justify-between items-center p-4 ${isOpen ? "mb-4" : ""}`}>
          {isOpen && <h1 className="text-white">APPAMOA</h1>}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex items-center justify-center h-8">
            {!isOpen ? <i className="fas fa-bars text-white" /> : <i className="fas fa-times text-white" />}
          </button>
        </div>
        {isOpen && (
          <div className={"flex-1 p-4 overflow-y-auto"}>
            <p className="text-white">Sidebar Content</p>
          </div>
        )}

        {/* Footer */}
        {isOpen && (
          <div className="p-4 bg-pink-500 text-white">
            <p>Footer Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
