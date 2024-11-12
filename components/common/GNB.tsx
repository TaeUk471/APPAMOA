"use client";

import useEditStore from "store/useEditStore";

import EditHeader from "./header/EditHeader";
import ViewHeader from "./header/ViewHeader";

export default function GNB() {
  const isEdit = useEditStore(state => state.isEdit);

  return <>{isEdit ? <EditHeader /> : <ViewHeader />}</>;
}
