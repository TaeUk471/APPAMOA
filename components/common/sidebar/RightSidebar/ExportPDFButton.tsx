import React, { useState } from "react";

import useClickOutSide from "@hooks/useClickoutSide";
import useToggle from "@hooks/useToggle";
import useExportPDFStore from "store/useExportPDFStore";

const ExportPDFButtons = ({ pageId }: { pageId: string }) => {
  const { isOpen, open, close, toggle } = useToggle(false);
  const [isExiting, setIsExiting] = useState(false);
  const handleExportCurrentPagePDF = useExportPDFStore(state => state.handleExportCurrentPagePDF);
  const handleExportAllPagesPDF = useExportPDFStore(state => state.handleExportAllPagesPDF);
  const UploadTemplateRef = useClickOutSide(() => {
    if (isOpen) toggle();
  });

  const toggleVisibility = () => {
    if (isOpen) {
      setIsExiting(true);
      setTimeout(() => {
        close();
        setIsExiting(false);
      }, 500);
    } else {
      open();
    }
  };

  return (
    <div ref={UploadTemplateRef} className="relative">
      <div className="fixed bottom-40 right-0 flex flex-col items-center">
        <button
          onClick={toggleVisibility}
          className={`relative w-20 h-20 rounded-l-full flex items-center justify-center bg-stone-700 text-white transition-transform duration-500 ${
            isOpen && !isExiting ? "scale-110 shadow-lg" : "shadow-md"
          }`}>
          <i className="far fa-file-pdf text-[22px] pl-2" />
          {isOpen && (
            <>
              {[1, 2].map((num, index) => (
                <button
                  key={num}
                  onClick={() => (num === 1 ? handleExportCurrentPagePDF(pageId) : handleExportAllPagesPDF())}
                  className={`absolute w-12 h-12 bg-stone-500 hover:bg-stone-700 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-in-out ${
                    isExiting ? "opacity-0 scale-50 translate-y-6" : "opacity-100 scale-100 translate-y-0"
                  }`}
                  style={{
                    top: `${index * 80}%`,
                    right: `${80}%`,
                    transform: "translate(-50%, -50%)",
                    transitionDelay: `${index * 150}ms`,
                  }}>
                  {num === 1 ? (
                    <i className="fa fa-1 text-[10px]" />
                  ) : (
                    <div className="font-poppins text-[10px]">ALL</div>
                  )}
                </button>
              ))}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ExportPDFButtons;
