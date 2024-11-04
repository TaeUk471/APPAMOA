"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DropContainer from "@components/common/DropContainer";

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

  const pageId = "page1";

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="edit-page-container" /*style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}*/>
        <h1>Edit Page</h1>
        <div className="drag-and-drop-area">
          <DropContainer pageId={pageId} />
        </div>
      </div>
    </DndProvider>
  );
};

export default EditPage;
