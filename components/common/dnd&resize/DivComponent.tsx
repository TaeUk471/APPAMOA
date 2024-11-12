import { DivComponentData } from "types/componenttype";

const DivComponent = ({ data }: { data: DivComponentData }) => (
  <div className=" rounded-2xl" style={{ backgroundColor: data.color, width: "100%", height: "100%" }} />
);

export default DivComponent;
