"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`bg-pink-400 transition-all
        ${isOpen ? "w-64 h-full" : "w-20 h-fit mt-4"} flex flex-col`}>
        <div className={`flex justify-between items-center p-4 ${isOpen ? "mb-4" : ""}`}>
          {isOpen && <h1 className="text-white">APPAMOA</h1>}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex items-center justify-center h-8">
            {!isOpen ? <i className="fas fa-bars text-white" /> : <i className="fas fa-times text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
