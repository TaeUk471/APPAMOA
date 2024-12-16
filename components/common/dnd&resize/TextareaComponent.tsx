import { TextareaComponentData } from "types/componenttype";

const TextareaComponent = ({ data }: { data: TextareaComponentData }) => (
  <textarea
    className=" text-6xl font-poppins"
    placeholder={data.placeholder}
    defaultValue={data.content}
    style={{ width: "100%", height: "100%" }}
  />
);

export default TextareaComponent;
