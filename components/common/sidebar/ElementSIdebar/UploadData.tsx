import React from "react";

const UploadData = ({ pageId }: { pageId: string }) => {
  const handleButtonClick = () => {
    console.log(pageId);
  };

  return (
    <div className={"fixed left-0 transition-all h-fit bottom-40 flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <button onClick={handleButtonClick}>
          <i
            className={
              "fa fa-database text-[24px] pr-[14px] pl-3 py-[15.5px] text-white cursor-pointer bg-stone-700 rounded-r-2xl"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default UploadData;
