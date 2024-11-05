import { create } from "zustand";

import User1 from "constant/DummyUser";

import { generatePageId } from "../utils/generatePageId";

interface PaginationState {
  pages: string[];
  currentPageIndex: number;
  addPage: (name: string, date: string) => void;
  removeLastPage: () => void;
  setCurrentPageIndex: (index: number) => void;
}

const usePaginationStore = create<PaginationState>(set => ({
  pages: [
    generatePageId(User1.name, User1.date, 1),
    generatePageId(User1.name, User1.date, 2),
    generatePageId(User1.name, User1.date, 3),
  ],
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
}));

export default usePaginationStore;
