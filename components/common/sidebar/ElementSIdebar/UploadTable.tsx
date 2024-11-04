"use client";

import React from "react";

import usePageDataStore from "store/usePageDataStore";

const UploadTable = ({ pageId }: { pageId: string }) => {
  const handleUploadTable = usePageDataStore(state => state.addTableComponent);

  const handleButtonClick = () =>
    handleUploadTable(pageId, 3, 3, [
      {
        row: 1,
        cells: [
          { col: 1, content: "표 입니다" },
          { col: 2, content: "Cell 1-2" },
          { col: 3, content: "Cell 1-3" },
        ],
      },
      {
        row: 2,
        cells: [
          { col: 1, content: "Cell 2-1" },
          { col: 2, content: "Cell 2-2" },
          { col: 3, content: "Cell 2-3" },
        ],
      },
      {
        row: 3,
        cells: [
          { col: 1, content: "Cell 3-1" },
          { col: 2, content: "Cell 3-2" },
          { col: 3, content: "Cell 3-3" },
        ],
      },
    ]); // 차후 모달창을 통한 json 데이터 입력 혹은 로컬 json파일 선택으로 대체 예정 (1안)=> 데이터 fetching이 가능하다면 서버에서 받아올 예정

  return (
    <div className={"fixed left-0 transition-all w-14 h-fit top-[180px] flex flex-col"}>
      <div className={"flex justify-between items-center"}>
        <button onClick={handleButtonClick}>
          <i className={"fa fa-table cursor-pointer px-[10px] py-4 bg-pink-300 rounded-r-lg "} />
        </button>
      </div>
    </div>
  );
};

export default UploadTable;
