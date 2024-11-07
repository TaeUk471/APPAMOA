"use client";

import React from "react";

import usePageDataStore from "store/usePageDataStore";

const UploadTextArea = ({ pageId }: { pageId: string }) => {
  const handleUploadTextArea = usePageDataStore(state => state.addTextareaComponent);

  const handleButtonClick = () => handleUploadTextArea(pageId, "No Data Available", false, "");

  return (
    <div className={"fixed left-0 transition-all w-14 h-fit top-[230px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <button onClick={handleButtonClick}>
          <i className={"fa fa-message cursor-pointer px-[10px] py-4 bg-pink-300 rounded-r-lg "} />
        </button>
      </div>
    </div>
  );
};

export default UploadTextArea;
