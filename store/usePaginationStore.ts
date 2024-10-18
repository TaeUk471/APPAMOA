// useAppStore.ts
import { create } from "zustand";

interface PaginationState {
  totalPage: number;
  currentPage: { [pageId: string]: number };
  setTotalPage: (totalPage: number) => void;
  increaseTotalPage: () => void;
  decreaseTotalPage: () => void;
  setCurrentPage: (pageId: string, currentPage: number) => void;
}

const usePaginationStore = create<PaginationState>(set => ({
  totalPage: 1,
  currentPage: {},
  setTotalPage: totalPage => set({ totalPage }),
  increaseTotalPage: () => set(state => ({ totalPage: state.totalPage + 1 })),
  decreaseTotalPage: () => set(state => ({ totalPage: Math.max(1, state.totalPage - 1) })),
  setCurrentPage: (pageId, currentPage) =>
    set(state => ({
      currentPage: {
        ...state.currentPage,
        [pageId]: currentPage,
      },
    })),
}));

export default usePaginationStore;
