import { create } from "zustand";

interface SelectionState {
  selectedComponentId: string | null;
  selectComponent: (id: string) => void;
  clearSelection: () => void;
}

const useSelectionStore = create<SelectionState>(set => ({
  selectedComponentId: null,
  selectComponent: id => set({ selectedComponentId: id }),
  clearSelection: () => set({ selectedComponentId: null }),
}));

export default useSelectionStore;
