"use client";

import useEditStore from "store/useEditStore";

import ViewHeader from "./header/EditHeader";
import EditHeader from "./header/ViewHeader";

export default function GNB() {
  const isEdit = useEditStore(state => state.isEdit);

  return <>{isEdit ? <EditHeader /> : <ViewHeader />}</>;
}
