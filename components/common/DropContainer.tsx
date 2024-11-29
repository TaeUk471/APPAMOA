"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

import registMouseDownDrag from "@utils/registDrag";
import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";

import DraggableResizableComponent from "./DragAndResizeComponent";

const DropContainer = ({ pageId }: { pageId: string }) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [containerOffset, setContainerOffset] = useState({ x: 0, y: 0 });
  const pages = usePageDataStore(state => state.pages);
  const pageData = pages[pageId];
  const clearSelection = useSelectionStore(state => state.clearSelection);
  const pathname = usePathname();

  const updateOffset = () => {
    if (dropRef.current) {
      const { left, top } = dropRef.current.getBoundingClientRect();
      setContainerOffset({
        x: left + window.scrollX,
        y: top + window.scrollY,
      });
    }
  };

  useEffect(() => {
    updateOffset();
    window.addEventListener("resize", updateOffset);
    window.addEventListener("scroll", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("scroll", updateOffset);
    };
  }, []);

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  const handleDragChange = (deltaX: number, deltaY: number) => {
    setContainerOffset(prevOffset => ({
      x: prevOffset.x + deltaX,
      y: prevOffset.y + deltaY,
    }));
  };

  useEffect(() => {
    const updatePages = () => {
      const updatedPages = usePageDataStore.getState().pages;
      console.log("Updated Pages:", updatedPages);
    };
    const unsubscribe = usePageDataStore.subscribe(updatePages);
    updatePages();
    return () => unsubscribe();
  }, []);

  const dragProps = registMouseDownDrag(handleDragChange, true);

  const handleClearSelect = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === `a4-container-${pageId}`) {
      clearSelection();
    }
  };

  return (
    <div
      ref={dropRef}
      {...dragProps}
      id={`a4-container-${pageId}`}
      onClick={handleClearSelect}
      className={`m-auto bg-white relative border-2 border-black overflow-hidden p-[10px] ${
        pathname.includes("/template") ? "w-[396.85px] h-[561.15px]" : "w-[793.7px] h-[1122.3px]"
      }`}>
      {pageData?.imageSet?.map(image => (
        <DraggableResizableComponent
          key={image.id}
          data={image}
          componentType="imageSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
      {pageData?.selectImageSet?.map(selectimage => (
        <DraggableResizableComponent
          key={selectimage.id}
          data={selectimage}
          componentType="selectImageSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
      {pageData?.divSet?.map(div => (
        <DraggableResizableComponent
          key={div.id}
          data={div}
          componentType="divSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
      {pageData?.tableSet?.map(table => (
        <DraggableResizableComponent
          key={table.id}
          data={table}
          componentType="tableSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
      {pageData?.textareaSet?.map(textarea => (
        <DraggableResizableComponent
          key={textarea.id}
          data={textarea}
          componentType="textareaSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
      {pageData?.preformattedSet?.map(preformattedText => (
        <DraggableResizableComponent
          key={preformattedText.id}
          data={preformattedText}
          componentType="preformattedSet"
          pageId={pageId}
          containerOffset={containerOffset}
        />
      ))}
    </div>
  );
};

export default DropContainer;
