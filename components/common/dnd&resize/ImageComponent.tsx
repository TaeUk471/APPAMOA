import Image from "next/image";

import { ImageComponentData } from "types/componenttype";

const ImageComponent = ({ data }: { data: ImageComponentData }) => (
  <Image src={data.url} alt="Image Component" width={150} height={100} />
);

export default ImageComponent;
