import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

import { initialPageData } from "constant/InitialPage";
import {
  DivComponentData,
  ImageComponentData,
  PageData,
  TableComponentData,
  TextareaComponentData,
} from "types/pagetype";

interface PaginationStore {
  pages: { [key: string]: PageData };
  addImageComponent: (pageId: string, url: string) => void;
  addDivComponent: (pageId: string, color: string) => void;
  addTableComponent: (pageId: string, rows: number, columns: number) => void;
  addTextareaComponent: (pageId: string, placeholder: string, underline: boolean) => void;
  deleteComponent: (pageId: string, componentType: keyof PageData, componentId: string) => void;
}

const usePaginationStore = create<PaginationStore>(set => ({
  pages: initialPageData,

  addImageComponent: (pageId, url) => {
    const newImage: ImageComponentData = {
      id: uuidv4(),
      x: 0,
      y: 0,
      width: 200,
      height: 100,
      url,
    };
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          imageSet: [...(state.pages[pageId]?.imageSet || []), newImage],
        },
      },
    }));
  },

  addDivComponent: (pageId, color) => {
    const newDiv: DivComponentData = {
      id: uuidv4(),
      x: 50,
      y: 50,
      width: 150,
      height: 150,
      color,
    };
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          divSet: [...(state.pages[pageId]?.divSet || []), newDiv],
        },
      },
    }));
  },

  addTableComponent: (pageId, rows, columns) => {
    const newTable: TableComponentData = {
      id: uuidv4(),
      x: 100,
      y: 100,
      width: 300,
      height: 200,
      rows,
      columns,
    };
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          tableSet: [...(state.pages[pageId]?.tableSet || []), newTable],
        },
      },
    }));
  },

  addTextareaComponent: (pageId, placeholder, underline) => {
    const newTextarea: TextareaComponentData = {
      id: uuidv4(),
      x: 150,
      y: 150,
      width: 250,
      height: 100,
      placeholder,
      underline,
    };
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          textareaSet: [...(state.pages[pageId]?.textareaSet || []), newTextarea],
        },
      },
    }));
  },

  deleteComponent: (pageId, componentType, componentId) => {
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          [componentType]: state.pages[pageId][componentType].filter(component => component.id !== componentId),
        },
      },
    }));
  },
}));

export default usePaginationStore;
