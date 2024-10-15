import Pagination from "../Pagination";

const EditHeader = () => {
  return (
    <>
      <div className="flex items-center justify-around h-[70px] bg-gray-75">
        <div className="flex gap-6">
          <div className="border-2 border-black p-3 bg-white rounded-md">로고</div>
          <div className="border-2 border-black p-3 bg-white rounded-md">편집 종료 버튼</div>
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
