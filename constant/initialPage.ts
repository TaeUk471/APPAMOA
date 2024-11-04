import { v4 as uuidv4 } from "uuid";

import { PageData } from "types/componenttype";

export const initialPageData: { [key: string]: PageData } = {
  김모아202411041: {
    imageSet: [{ id: uuidv4(), x: 0, y: 0, width: 100, height: 100, url: "/images/고먐미.jpeg" }],
    divSet: [{ id: uuidv4(), x: 100, y: 100, width: 150, height: 20, color: "black" }],
    tableSet: [
      {
        id: uuidv4(),
        x: 200,
        y: 200,
        width: 300,
        height: 200,
        data: [
          {
            row: 1,
            cells: [
              { col: 1, content: "하 참" },
              { col: 2, content: "Cell 1-2" },
              { col: 3, content: "Cell 1-3" },
            ],
          },
          {
            row: 2,
            cells: [
              { col: 1, content: "Cell 2-1" },
              { col: 2, content: "Cell 2-2" },
              { col: 3, content: "Cell 2-3" },
            ],
          },
          {
            row: 3,
            cells: [
              { col: 1, content: "Cell 3-1" },
              { col: 2, content: "Cell 3-2" },
              { col: 3, content: "Cell 3-3" },
            ],
          },
        ],
        rows: 3,
        columns: 3,
      },
    ],
    textareaSet: [
      {
        id: uuidv4(),
        x: 400,
        y: 50,
        width: 250,
        height: 100,
        placeholder: "Enter text",
        underline: true,
        content: "아유 어렵다잉",
      },
    ],
  },
};
