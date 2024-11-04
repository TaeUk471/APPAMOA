"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DropContainer from "@components/common/DropContainer";
import ElementSidebar from "@components/common/sidebar/ElementSidebar";
import InputSidebar from "@components/common/sidebar/InputSidebar";
import usePaginationStore from "store/usePaginationStore";

const EditPage = () => {
  /*const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey) {
      event.preventDefault();
      setZoomLevel(prevZoom => Math.min(Math.max(prevZoom + event.deltaY * -0.001, 0.5), 2));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);*/

  const pages = usePaginationStore(state => state.pages);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="edit-page-container" /*style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}*/>
        <div className="drag-and-drop-area">
          <DropContainer pageId={currentPage} />
        </div>
      </div>
      <ElementSidebar pageId={currentPage} />
      <InputSidebar pageId={currentPage} />
    </DndProvider>
  );
};

export default EditPage;
