import { TableComponentData } from "types/componenttype";

const TableComponent = ({ data }: { data: TableComponentData }) => (
  <table style={{ width: "100%", height: "100%", borderCollapse: "separate" }} className="text-center">
    <tbody>
      {data.data.map(row => (
        <tr key={row.row}>
          {row.cells.map((cell, cellIndex) => (
            <td
              key={cell.col}
              className={`border-1 border-black 
                ${cellIndex === 0 ? "border-l-0" : ""} 
                ${cellIndex === row.cells.length - 1 ? "border-r-0" : ""}`}>
              {cell.content}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableComponent;
