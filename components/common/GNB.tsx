import Pagination from "./Pagination";

export default function GNB({ isEdit }: { isEdit: boolean }) {
  return (
    <>
      {isEdit ? (
        <div className="flex justify-center bg h-[70px] bg-gradient-to-b from-black via-black/80 to-gray-500">
          <Pagination pageId="edit" />
        </div>
      ) : (
        <div className="bg-blue-500 h-[70px]">not editing GNB</div>
      )}
    </>
  );
}
