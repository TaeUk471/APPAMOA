"use client";

import React, { useState } from "react";

import useClickOutSide from "@hooks/useClickoutSide";
import useToggle from "@hooks/useToggle";

const UploadTemplate = ({ pageId }: { pageId: string }) => {
  const { isOpen, toggle } = useToggle(false);
  const [isExiting, setIsExiting] = useState(false);
  const UploadTemplateRef = useClickOutSide(() => {
    if (isOpen) closeWithAnimation();
  });

  const closeWithAnimation = () => {
    setIsExiting(true);
    setTimeout(() => {
      toggle();
      setIsExiting(false);
    }, 500);
  };

  const handleButtonClick = () => {
    if (isOpen) {
      closeWithAnimation();
    } else {
      toggle();
    }
  };

  const handleCircleClick = (num: number) => {
    console.log(num, pageId);
  };

  return (
    <div ref={UploadTemplateRef} className="relative">
      <div className="fixed bottom-40 left-0 flex flex-col items-center">
        <button
          onClick={handleButtonClick}
          className={`relative w-16 h-20 rounded-r-full flex items-center justify-center bg-purple-400 transition-transform duration-500 ${
            isOpen && !isExiting ? "scale-110 shadow-lg" : "shadow-md"
          }`}>
          <i className="fab fa-instagram text-[22px] pr-3" />
          {isOpen && (
            <>
              {[1, 2, 3].map((num, index) => (
                <button
                  key={num}
                  onClick={() => handleCircleClick(num)}
                  className={`absolute w-12 h-12 bg-purple-500 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-in-out ${
                    isExiting ? "opacity-0 scale-50 translate-y-6" : "opacity-100 scale-100 translate-y-0"
                  }`}
                  style={{
                    top: `${-30 + index * 80}%`,
                    left: `${index === 1 ? 150 : 100}%`,
                    transform: "translate(-50%, -50%)",
                    transitionDelay: `${index * 150}ms`,
                  }}>
                  {num}
                </button>
              ))}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadTemplate;
