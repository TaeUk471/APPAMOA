import Button from "@components/button/Button";
import useEditStore from "store/useEditStore";

import Pagination from "../Pagination";

const EditHeader = () => {
  const setIsEdit = useEditStore(state => state.setIsEdit);
  console.log(setIsEdit);

  return (
    <>
      <div className="flex items-center justify-between h-[70px] shadow-md p-4 border-t-4 border-purple-800">
        <div className="flex gap-6">
          <div className="border-2 border-black p-3 rounded-md">로고</div>
          <Button size={"s"} color={"primary"} isLoading={false}>
            편집 기능
          </Button>
        </div>
        <Pagination pageId="edit" />
        <div className="flex gap-6">
          <Button size={"s"} color={"primary"} isLoading={false}>
            미리보기
          </Button>
          <Button size={"s"} color={"primary"} isLoading={false}>
            pdf 출력하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditHeader;
