import { PreformattedComponentData } from "types/componenttype";

const PreformattedComponent = ({ data }: { data: PreformattedComponentData }) => (
  <pre className="text-2xl" style={{ width: "100%", height: "100%", whiteSpace: "pre-wrap" }}>
    {data.content}
  </pre>
);

export default PreformattedComponent;
