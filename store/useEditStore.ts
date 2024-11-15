import { create } from "zustand";

interface EditStoreProps {
  isEdit: boolean;
  setIsEdit: () => void;
}

const useEditStore = create<EditStoreProps>(set => ({
  isEdit: true,
  setIsEdit: () => set(state => ({ isEdit: !state.isEdit })),
}));
export default useEditStore;
