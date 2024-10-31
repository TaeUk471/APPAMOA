"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DropContainer from "@components/common/DropContainer";

const EditPage = () => {
  const pageId = "page1";

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="edit-page-container">
        <h1>Edit Page</h1>
        <div className="drag-and-drop-area">
          <DropContainer pageId={pageId} />
        </div>
      </div>
    </DndProvider>
  );
};

export default EditPage;
