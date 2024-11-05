import { useEffect, useRef } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";

import registMouseDownDrag from "@utils/registDrag";
import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";
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
  const { id, x, y, width, height } = data;
  const updateComponent = usePageDataStore(state => state.updateComponent);
  const deleteComponent = usePageDataStore(state => state.deleteComponent);
  const containerRef = useRef<HTMLDivElement>(null);

  const { selectedComponentId, selectComponent } = useSelectionStore();
  const isSelected = selectedComponentId === id;

  const handleDragChange = (deltaX: number, deltaY: number) => {
    const adjustedX = x + deltaX;
    const adjustedY = y + deltaY;
    updateComponent(pageId, componentType, id, { x: adjustedX, y: adjustedY });
  };
  const dragProps = registMouseDownDrag(handleDragChange, true);

  const handleResize = (e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    updateComponent(pageId, componentType, id, { width: size.width, height: size.height });
  };

  const handleSelect = () => {
    selectComponent(id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSelected && e.key === "Delete") {
        deleteComponent(pageId, componentType, id);
      }
    };

    window.addEventListener("keydown", handleKeyDown); // 전역적으로 탐색
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSelected, pageId, componentType, id, deleteComponent]);

  return (
    <div
      ref={containerRef}
      {...(isSelected ? {} : dragProps)}
      onClick={handleSelect}
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: isSelected ? "default" : "move",
        border: isSelected ? "1px solid #07A" : "",
      }}
      onDragStart={e => e.preventDefault()}>
      <Resizable
        width={width}
        height={height}
        onResize={handleResize}
        resizeHandles={isSelected ? ["se", "sw", "ne", "nw"] : []}
        minConstraints={componentType === "divSet" ? [80, 2] : componentType === "textareaSet" ? [80, 30] : [80, 80]}
        handle={(resizeHandle, ref) => (
          <div
            ref={ref}
            className={`resize-handle ${resizeHandle}`}
            style={{
              borderRadius: "8px",
              pointerEvents: "auto",
              cursor: `${resizeHandle}-resize`,
              width: "5px",
              height: "5px",
              backgroundColor: "white",
              position: "absolute",
              ...(resizeHandle === "se" && { bottom: 0, right: 0 }),
              ...(resizeHandle === "sw" && { bottom: 0, left: 0 }),
              ...(resizeHandle === "ne" && { top: 0, right: 0 }),
              ...(resizeHandle === "nw" && { top: 0, left: 0 }),
            }}
          />
        )}>
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            position: "relative",
          }}>
          {componentType === "imageSet" && <ImageComponent data={data as ImageComponentData} />}
          {componentType === "divSet" && <DivComponent data={data as DivComponentData} />}
          {componentType === "tableSet" && <TableComponent data={data as TableComponentData} />}
          {componentType === "textareaSet" && <TextareaComponent data={data as TextareaComponentData} />}
        </div>
      </Resizable>
    </div>
  );
};

export default DraggableComponent;
