// DragAndResizeComponent.tsx
import { useRef } from "react";

import registMouseDownDrag from "@utils/registMouseDownDrag";
import usePageDataStore from "store/usePageDataStore";
import {
  ImageComponentData,
  DivComponentData,
  TableComponentData,
  TextareaComponentData,
  PageData,
} from "types/componenttype";

import DivComponent from "./dnd&resize/DivComponent";
import ImageComponent from "./dnd&resize/ImageComponent";
import TableComponent from "./dnd&resize/TableComponent";
import TextareaComponent from "./dnd&resize/TextareaComponent";

type ComponentData = ImageComponentData | DivComponentData | TableComponentData | TextareaComponentData;

interface DraggableComponentProps {
  data: ComponentData;
  componentType: keyof PageData;
  pageId: string;
  containerOffset: { x: number; y: number };
}

const DraggableComponent = ({ data, componentType, pageId }: DraggableComponentProps) => {
  const { id, x, y } = data;
  const updateComponent = usePageDataStore(state => state.updateComponent);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragChange = (deltaX: number, deltaY: number) => {
    const adjustedX = x + deltaX;
    const adjustedY = y + deltaY;
    updateComponent(pageId, componentType, id, { x: adjustedX, y: adjustedY });
  };

  const dragProps = registMouseDownDrag(handleDragChange, true);

  return (
    <div
      ref={containerRef}
      {...dragProps}
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: "move",
        border: "1px solid #ccc",
      }}
      onDragStart={e => e.preventDefault()}>
      {componentType === "imageSet" && <ImageComponent data={data as ImageComponentData} />}
      {componentType === "divSet" && <DivComponent data={data as DivComponentData} />}
      {componentType === "tableSet" && <TableComponent data={data as TableComponentData} />}
      {componentType === "textareaSet" && <TextareaComponent data={data as TextareaComponentData} />}
    </div>
  );
};

export default DraggableComponent;
