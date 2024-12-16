import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

import { initialPageData } from "constant/initialPage";
import {
  DivComponentData,
  ImageComponentData,
  PageData,
  PreformattedComponentData,
  RowData,
  TableComponentData,
  TextareaComponentData,
} from "types/componenttype";

interface PageDataStore {
  pages: { [key: string]: PageData };
  addImageComponent: (pageId: string, url: string) => void;
  addSelectImageComponent: (pageId: string, url: string, x: number, y: number, width: number, height: number) => void;
  addDivComponent: (pageId: string, color: string) => void;
  addTableComponent: (pageId: string, rows: number, columns: number, data: RowData[]) => void;
  addTextareaComponent: (pageId: string, placeholder: string, underline: boolean, content: string) => void;
  addPreformattedComponent: (pageId: string, content: string) => void;
  deleteComponent: (pageId: string, componentType: keyof PageData, componentId: string) => void;
  updateComponent: <ComponentType extends keyof PageData>(
    pageId: string,
    componentType: ComponentType,
    componentId: string,
    updates: Partial<PageData[ComponentType][number]>
  ) => void;
}

const usePageDataStore = create<PageDataStore>(set => ({
  pages: initialPageData,

  addImageComponent: (pageId, url) => {
    const newImage: ImageComponentData = {
      id: uuidv4(),
      x: 0,
      y: 0,
      width: 50,
      height: 50,
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

  addSelectImageComponent: (pageId, url, x, y, width, height) => {
    const newImage: ImageComponentData = {
      id: uuidv4(),
      x: x,
      y: y,
      width: width,
      height: height,
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
      x: 10,
      y: 100,
      width: 200,
      height: 10,
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

  addTableComponent: (pageId, rows, columns, data) => {
    const newTable: TableComponentData = {
      id: uuidv4(),
      x: 10,
      y: 200,
      width: rows * 60,
      height: columns * 40,
      rows,
      columns,
      data:
        data ||
        Array.from({ length: rows }, (_, rowIndex) => ({
          row: rowIndex + 1,
          cells: Array.from({ length: columns }, (_, colIndex) => ({
            col: colIndex + 1,
            content: `Cell ${rowIndex + 1}-${colIndex + 1}`,
          })),
        })),
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

  addTextareaComponent: (pageId, placeholder, underline = false, content = "") => {
    const newTextarea: TextareaComponentData = {
      id: uuidv4(),
      x: 10,
      y: 300,
      width: 400,
      height: 50,
      placeholder,
      underline,
      content,
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

  addPreformattedComponent: (pageId, content = "") => {
    const newPreformattedText: PreformattedComponentData = {
      id: uuidv4(),
      x: 10,
      y: 400,
      width: 770,
      height: 400,
      content,
    };
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          preformattedSet: [...(state.pages[pageId]?.preformattedSet || []), newPreformattedText],
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

  updateComponent: (pageId, componentType, componentId, updates) => {
    set(state => ({
      pages: {
        ...state.pages,
        [pageId]: {
          ...state.pages[pageId],
          [componentType]: state.pages[pageId][componentType].map(component =>
            component.id === componentId ? { ...component, ...updates } : component
          ),
        },
      },
    }));
  },
}));

export default usePageDataStore;
