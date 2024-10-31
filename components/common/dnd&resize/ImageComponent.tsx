import Image from "next/image";

import { ImageComponentData } from "types/componenttype";

const ImageComponent = ({ data }: { data: ImageComponentData }) => (
  <Image src={data.url} alt="Image Component" style={{ width: "100%", height: "100%" }} />
);

export default ImageComponent;
