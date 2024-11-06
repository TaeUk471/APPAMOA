import { create } from "zustand";

import { generatePageId } from "../utils/generatePageId";

interface PaginationState {
  pages: string[];
  currentPageIndex: number;
  addPage: (name: string, date: string) => void;
  removeLastPage: () => void;
  setCurrentPageIndex: (index: number) => void;
  resetPages: (name: string, examinationId: string) => void;
}

const usePaginationStore = create<PaginationState>(set => ({
  pages: [],
  currentPageIndex: 0,

  addPage: (name, date) =>
    set(state => {
      const newPageId = generatePageId(name, date, state.pages.length + 1);
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

  resetPages: (name, examinationId) =>
    set(() => ({
      pages: [
        generatePageId(name, examinationId, 1),
        generatePageId(name, examinationId, 2),
        generatePageId(name, examinationId, 3),
      ],
      currentPageIndex: 0,
    })),
}));

export default usePaginationStore;
