import { useRef } from "react";

import useUploadImage from "@hooks/useUploadImage";

const SelectImageComponent = ({ pageId }: { pageId: string }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadImage = useUploadImage();
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <button
      className={"flex justify-center items-center cursor-pointer w-full h-full bg-stone-800 rounded-3xl"}
      onClick={handleButtonClick}>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={event => uploadImage(event, pageId)}
        multiple
      />
      <div>
        <i className={"fa fa-plus text-4xl w-full h-full cursor-pointer p-1 bg-stone-800 text-white rounded-xl"} />
      </div>
    </button>
  );
};

export default SelectImageComponent;
