import { DivComponentData } from "types/componenttype";

const DivComponent = ({ data }: { data: DivComponentData }) => (
  <div style={{ backgroundColor: data.color, width: "100%", height: "100%" }} />
);

export default DivComponent;
