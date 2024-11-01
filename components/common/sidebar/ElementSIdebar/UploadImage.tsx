"use client";

import React, { useRef, useState } from "react";

import usePageDataStore from "store/usePageDataStore";

const UploadImage = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const handleUploadImage = usePageDataStore(state => state.addImageComponent);
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const doUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          const imageUrl = URL.createObjectURL(file);
          handleUploadImage("page1", imageUrl); // 추후에 변경해야함 pagination과 연결 해야함!.
        } else {
          alert("이미지 파일만 선택할 수 있습니다.");
        }
      }
      setIsUploading(false);
    } else {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    setIsUploading(true);
    fileInputRef.current.click();
  };

  return (
    <div className={"bg-purple-900 fixed top-25 left-0 transition-all w-14 h-fit top-[80px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={doUpload} multiple />
        <button className="bg-slate-300" onClick={handleButtonClick}>
          <i
            className={`fa fa-image cursor-pointer p-4 bg-pink-300 rounded-r-lg  ${isUploading ? "shadow-innerShadow" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
