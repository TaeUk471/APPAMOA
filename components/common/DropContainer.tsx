import { useRef } from "react";
import { useDrop } from "react-dnd";

import usePageDataStore from "store/usePageDataStore";

import DraggableResizableComponent from "./DragAndResizeComponent";

const DropContainer = ({ pageId }: { pageId: string }) => {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const pages = usePageDataStore(state => state.pages);
  const pageData = pages[pageId];

  const [, drop] = useDrop({
    accept: "BOX",
  });
  drop(dropRef);

  return (
    <div
      ref={dropRef}
      id={`a4-container-${pageId}`}
      className="w-[210mm] h-[297mm] m-auto bg-white relative border-2 border-black overflow-hidden p-[10px]">
      {pageData?.imageSet?.map(image => (
        <DraggableResizableComponent key={image.id} data={image} componentType="imageSet" pageId={pageId} />
      ))}
      {pageData?.divSet?.map(div => (
        <DraggableResizableComponent key={div.id} data={div} componentType="divSet" pageId={pageId} />
      ))}
      {pageData?.tableSet?.map(table => (
        <DraggableResizableComponent key={table.id} data={table} componentType="tableSet" pageId={pageId} />
      ))}
      {pageData?.textareaSet?.map(textarea => (
        <DraggableResizableComponent key={textarea.id} data={textarea} componentType="textareaSet" pageId={pageId} />
      ))}
    </div>
  );
};

export default DropContainer;
