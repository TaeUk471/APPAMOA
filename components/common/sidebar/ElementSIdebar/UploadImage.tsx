"use client";

import React, { useRef } from "react";

import useUploadImage from "@hooks/useUploadImage";

const UploadImage = ({ pageId }: { pageId: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const uploadImage = useUploadImage();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={"fixed top-25 left-0 transition-all w-14 h-fit top-[80px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={event => uploadImage(event, pageId)}
          multiple
        />
        <button onClick={handleButtonClick}>
          <i className={"fa fa-image cursor-pointer p-4 bg-pink-300 rounded-r-lg"} />
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
