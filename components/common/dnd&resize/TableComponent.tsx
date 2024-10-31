import { TableComponentData } from "types/componenttype";

const TableComponent = ({ data }: { data: TableComponentData }) => (
  <table style={{ width: "100%", height: "100%" }}>
    <tbody>
      {data.data.map(row => (
        <tr key={row.row}>
          {row.cells.map(cell => (
            <td key={cell.col}>{cell.content}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableComponent;
