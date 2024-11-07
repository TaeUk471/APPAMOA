import Image from "next/image";

import { SelectImageComponentData } from "types/componenttype";

const SelectImageComponent = ({ data }: { data: SelectImageComponentData }) => (
  <Image src={data.url} alt="Image Component" width={100} height={100} />
);

export default SelectImageComponent;
