export default function GNB({ isEdit }: { isEdit: boolean }) {
  return (
    <>
      {isEdit ? (
        <div className="bg-blue-500 h-[70px]">editing GNB</div>
      ) : (
        <div className="bg-blue-500 h-[70px]">not editing GNB</div>
      )}
    </>
  );
}
