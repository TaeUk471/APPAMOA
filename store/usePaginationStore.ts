import { create } from "zustand";

import { generatePageId } from "../utils/generatePageId";

interface PaginationState {
  pages: string[];
  currentPageIndex: number;
  addPage: (examinationId: string, date: string) => void;
  removeLastPage: () => void;
  setCurrentPageIndex: (index: number) => void;
  resetPages: (examinationId: string, date: string) => void;
}

const usePaginationStore = create<PaginationState>(set => ({
  pages: [],
  currentPageIndex: 0,

  addPage: (examinationId, date) =>
    set(state => {
      const newPageId = generatePageId(examinationId, date, state.pages.length + 1);
      return {
        pages: [...state.pages, newPageId],
      };
    }),

  removeLastPage: () =>
    set(state => ({
      pages: state.pages.length > 3 ? state.pages.slice(0, -1) : state.pages,
    })),

  setCurrentPageIndex: (index: number) =>
    set(state => ({
      currentPageIndex: index >= 0 && index < state.pages.length ? index : state.currentPageIndex,
    })),

  resetPages: (examinationId, date) =>
    set(() => ({
      pages: [
        generatePageId(examinationId, date, 1),
        generatePageId(examinationId, date, 2),
        generatePageId(examinationId, date, 3),
      ],
      currentPageIndex: 0,
    })),
}));

export default usePaginationStore;
