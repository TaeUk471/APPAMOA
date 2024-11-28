"use client";

import React, { useRef } from "react";

import useUploadJson from "@hooks/useUploadJson";

const UploadTable = ({ pageId }: { pageId: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const uploadJson = useUploadJson();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={"fixed left-0 transition-all w-14 h-fit top-[280px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="application/json"
          onChange={event => uploadJson({ event, pageId, componentType: "table" })}
          multiple
        />
        <button onClick={handleButtonClick}>
          <i className={"fa fa-table cursor-pointer px-[10px] py-4 bg-pink-300 rounded-r-lg "} />
        </button>
      </div>
    </div>
  );
};

export default UploadTable;
