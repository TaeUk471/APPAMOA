import React, { useRef, useState } from "react";

import useImageStore from "store/useImageStore";

const UploadImage = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const addImageUrl = useImageStore(state => state.AddImageUrls);
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const doUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          const imageUrl = URL.createObjectURL(file);
          addImageUrl(imageUrl);
          console.log(imageUrl);
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
        <button className="bg-white" onClick={handleButtonClick}>
          <i
            className={`fa fa-image cursor-pointer p-4 bg-pink-300 rounded-lg ${isUploading ? "shadow-innerShadow" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
