import useEditStore from "store/useEditStore";

import EditHeader from "./header/EditHeader";

export default function GNB() {
  const isEdit = useEditStore(state => state.isEdit);

  return <>{isEdit ? <EditHeader /> : <div className="bg-blue-500 h-[70px]">not editing GNB</div>}</>;
}
