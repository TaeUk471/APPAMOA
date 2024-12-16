"use client";

import React, { useState } from "react";

import useClickOutSide from "@hooks/useClickOutSide";
import useToggle from "@hooks/useToggle";
import usePageDataStore from "store/usePageDataStore";

const UploadTemplate = ({ pageId }: { pageId: string }) => {
  const { isOpen, toggle } = useToggle(false);
  const [isExiting, setIsExiting] = useState(false);
  const UploadTemplateRef = useClickOutSide(() => {
    if (isOpen) closeWithAnimation();
  });

  const addImageComponent = usePageDataStore(state => state.addImageComponent);
  const addDivComponent = usePageDataStore(state => state.addDivComponent);
  const addTextareaComponent = usePageDataStore(state => state.addTextareaComponent);
  const addPreformattedComponent = usePageDataStore(state => state.addPreformattedComponent);

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
    switch (num) {
      case 1:
        addImageComponent(pageId, "/images/서울대 병원.jpeg");
        addDivComponent(pageId, "#000000");
        addTextareaComponent(pageId, "Enter your text", false, "Tokyo Hospital");
        break;
      case 2:
        addImageComponent(pageId, "/images/아산병원.jpeg");
        addDivComponent(pageId, "#000000");
        addPreformattedComponent(
          pageId,
          "소중한 건강을 위한 정밀 검진 보고서\n\n환자님께,  \n\n이번 검진은 귀하의 건강 상태를 면밀히 점검하기 위해 최신 의료 장비와 전문적인 의료진의 협력 아래 이루어졌습니다. 본 보고서는 환자님의 현재 건강 상태를 종합적으로 분석하고, 잠재적인 위험 요소를 조기에 발견하며, 건강한 삶을 유지할 수 있도록 도움을 드리고자 작성되었습니다.  \n\n검진 항목은 환자님의 생활습관, 연령, 병력 등을 고려하여 맞춤형으로 선정되었으며, 결과는 표준 기준과 비교해 상세히 기술하였습니다. 또한, 추가로 필요한 검사나 권장 사항, 치료 옵션 등을 안내하여 앞으로의 건강 관리를 위한 방향을 제시합니다.  \n\n**검진 결과를 확인하시고, 의문 사항이나 궁금한 점은 의료진과 상담하시길 바랍니다.**\n\n건강은 예방이 최선의 치료입니다. 본 검진 결과를 통해 환자님의 건강 상태를 철저히 이해하고, 더 건강하고 행복한 삶을 만들어 가시길 바랍니다.\n\n감사합니다."
        );
        break;
      case 3:
        addImageComponent(pageId, "/images/연대 세브란스 병원.jpeg");
        addDivComponent(pageId, "#0022cc");
        addTextareaComponent(pageId, "Another text area", true, "Content for Template 3");
        break;
      default:
        console.warn(`Unknown template: ${num}`);
    }
    console.log(`Template ${num} added to page ${pageId}`);
    closeWithAnimation();
  };

  return (
    <div ref={UploadTemplateRef} className="relative">
      <div className="fixed bottom-40 left-0 flex flex-col items-center">
        <button
          onClick={handleButtonClick}
          className={`relative w-16 h-20 rounded-r-full flex items-center justify-center bg-purple-400 transition-transform duration-500 ${
            isOpen && !isExiting ? "scale-110 shadow-lg" : "shadow-md"
          }`}>
          <i className="fab fa-dropbox text-[22px] pr-3" />
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
