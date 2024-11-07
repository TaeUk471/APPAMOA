import { useRef } from "react";

import useUploadImage from "@hooks/useUploadImage";
import usePageDataStore from "store/usePageDataStore";
import { SelectImageComponentData } from "types/componenttype";

const SelectImageComponent = ({ data, pageId }: { data: SelectImageComponentData; pageId: string }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const pages = usePageDataStore(state => state.pages);
  const pageInfo = pages[pageId];

  const uploadImage = useUploadImage();
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      console.log(pageInfo, data, pageId);
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
        onChange={event => uploadImage(event, pageId, data.x, data.y, data.width, data.height)}
        multiple
      />
      <div>
        <i className={"fa fa-plus text-4xl w-full h-full cursor-pointer p-1 bg-stone-800 text-white rounded-xl"} />
      </div>
    </button>
  );
};

export default SelectImageComponent;
