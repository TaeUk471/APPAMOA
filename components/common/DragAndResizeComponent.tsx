import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Resizable, ResizeCallbackData } from "react-resizable";

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

interface DraggableResizableComponentProps {
  data: ComponentData;
  componentType: keyof PageData;
  pageId: string;
}

const DraggableResizableComponent = ({ data, componentType, pageId }: DraggableResizableComponentProps) => {
  const { id, x, y, width, height } = data;
  const updateComponent = usePageDataStore(state => state.updateComponent);

  const containerRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "BOX",
    item: { id, pageId, componentType },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "BOX",
    drop: () => ({ id, pageId, componentType }),
  });

  const handleResize = (e: unknown, { size }: ResizeCallbackData) => {
    updateComponent(pageId, componentType, id, { width: size.width, height: size.height });
  };

  drag(drop(containerRef));

  return (
    <Resizable width={width} height={height} onResize={handleResize}>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: `${width}px`,
          height: `${height}px`,
          opacity: isDragging ? 0.5 : 1,
        }}>
        {componentType === "imageSet" && <ImageComponent data={data as ImageComponentData} />}
        {componentType === "divSet" && <DivComponent data={data as DivComponentData} />}
        {componentType === "tableSet" && <TableComponent data={data as TableComponentData} />}
        {componentType === "textareaSet" && <TextareaComponent data={data as TextareaComponentData} />}
      </div>
    </Resizable>
  );
};

export default DraggableResizableComponent;
