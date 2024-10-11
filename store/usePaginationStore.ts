import { create } from "zustand";

interface PaginationState {
  pagination: {
    [pageId: string]: number;
  };
  setPage: (pageId: string, currentPage: number) => void;
}

const usePaginationStore = create<PaginationState>(set => ({
  pagination: {},
  setPage: (pageId, currentPage) =>
    set(state => ({
      pagination: {
        ...state.pagination,
        [pageId]: currentPage,
      },
    })),
}));

export default usePaginationStore;
