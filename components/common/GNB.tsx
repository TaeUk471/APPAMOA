import EditHeader from "./header/EditHeader";

export default function GNB({ isEdit }: { isEdit: boolean }) {
  return <>{isEdit ? <EditHeader /> : <div className="bg-blue-500 h-[70px]">not editing GNB</div>}</>;
}
