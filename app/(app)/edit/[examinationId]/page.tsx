"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DropContainer from "@components/common/DropContainer";
import ElementSidebar from "@components/common/sidebar/ElementSidebar";
import InputSidebar from "@components/common/sidebar/InputSidebar";
import PatientList from "constant/DummyPatientList";
import usePaginationStore from "store/usePaginationStore";
import useSelectUserStore from "store/useSelectUserStore";

const EditPage = () => {
  const { examinationId } = useParams();
  const router = useRouter();
  const { setUser } = useSelectUserStore();
  const resetPages = usePaginationStore(state => state.resetPages);

  useEffect(() => {
    const foundPatient = PatientList.find(patient => patient.examinationId === examinationId);

    if (!foundPatient) {
      notFound();
    }

    setUser(foundPatient);
    resetPages(foundPatient.name, foundPatient.examinationId);
    router.push(`${foundPatient.examinationId}`);
  }, [examinationId]);

  const pages = usePaginationStore(state => state.pages);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="edit-page-container">
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
