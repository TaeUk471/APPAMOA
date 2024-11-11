interface CellData {
  col: number;
  content: string;
}

interface RowData {
  row: number;
  cells: CellData[];
}

interface ProcessedTableData {
  rows: number;
  columns: number;
  data: RowData[];
}

const processTableData = (jsonData: RowData[]): ProcessedTableData => {
  const rows = jsonData.length;
  const columns = jsonData[0]?.cells.length || 0;

  const data = jsonData.map((row, rowIndex) => ({
    row: rowIndex + 1,
    cells: row.cells.map((cell, colIndex) => ({
      col: colIndex + 1,
      content: cell.content || "",
    })),
  }));

  return { rows, columns, data };
};

export default processTableData;
