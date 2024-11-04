import { v4 as uuidv4 } from "uuid";

import { PageData } from "types/componenttype";

export const initialPageData: { [key: string]: PageData } = {
  김모아202411041: {
    imageSet: [
      // { id: uuidv4(), x: 0, y: 0, width: 100, height: 100, url: "/images/고먐미.jpeg" }
    ],
    divSet: [{ id: uuidv4(), x: 11, y: 90, width: 755, height: 3, color: "black" }],
    tableSet: [
      // {
      //   id: uuidv4(),
      //   x: 200,
      //   y: 200,
      //   width: 300,
      //   height: 200,
      //   data: [
      //     {
      //       row: 1,
      //       cells: [
      //         { col: 1, content: "하 참" },
      //         { col: 2, content: "Cell 1-2" },
      //         { col: 3, content: "Cell 1-3" },
      //       ],
      //     },
      //     {
      //       row: 2,
      //       cells: [
      //         { col: 1, content: "Cell 2-1" },
      //         { col: 2, content: "Cell 2-2" },
      //         { col: 3, content: "Cell 2-3" },
      //       ],
      //     },
      //     {
      //       row: 3,
      //       cells: [
      //         { col: 1, content: "Cell 3-1" },
      //         { col: 2, content: "Cell 3-2" },
      //         { col: 3, content: "Cell 3-3" },
      //       ],
      //     },
      //   ],
      //   rows: 3,
      //   columns: 3,
      // },
    ],
    textareaSet: [
      {
        id: uuidv4(),
        x: 50,
        y: 60,
        width: 85,
        height: 30,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 195,
        y: 60,
        width: 155,
        height: 30,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 430,
        y: 60,
        width: 130,
        height: 30,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 650,
        y: 60,
        width: 120,
        height: 30,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 55,
        y: 110,
        width: 705,
        height: 70,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 55,
        y: 190,
        width: 650,
        height: 70,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 55,
        y: 270,
        width: 630,
        height: 72,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
      {
        id: uuidv4(),
        x: 55,
        y: 350,
        width: 190,
        height: 240,
        placeholder: "Enter text",
        underline: true,
        content: "종합검진",
      },
    ],
  },
};
