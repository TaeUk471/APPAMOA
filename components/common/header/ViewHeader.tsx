import useEditStore from "store/useEditStore";

import Pagination from "../Pagination";

const EditHeader = () => {
  const setIsEdit = useEditStore(state => state.setIsEdit);

  return (
    <>
      <div className="flex items-center justify-around h-[70px] bg-gray-75">
        <div className="flex gap-6">
          <div className="border-2 border-black p-3 bg-white rounded-md">로고</div>
          <button className="border-2 border-black p-3 bg-white rounded-md" onClick={setIsEdit}>
            편집 버튼
          </button>
        </div>
        <Pagination pageId="edit" />
        <div className="flex gap-6">
          <div className="border-2 border-black p-3 bg-white rounded-md">미리보기</div>
          <div className="border-2 border-black p-3 bg-white rounded-md">pdf 출력하기</div>
        </div>
      </div>
    </>
  );
};

export default EditHeader;
