import React, { useRef } from "react";

import useUploadJson from "@hooks/useUploadJson";

const UploadPreformattedText = ({ pageId }: { pageId: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const uploadJson = useUploadJson();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={"fixed left-0 transition-all h-fit top-[230px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="application/json"
          onChange={event => uploadJson({ event, pageId, componentType: "text" })}
          multiple
        />
        <button onClick={handleButtonClick}>
          <i className={"fa fa-arrow-down-wide-short cursor-pointer px-[9px] py-4 bg-pink-300 rounded-r-lg "} />
        </button>
      </div>
    </div>
  );
};

export default UploadPreformattedText;
