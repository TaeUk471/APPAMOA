"use client";

import { notFound, useParams } from "next/navigation";
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DropContainer from "@components/common/DropContainer";
import ElementSidebar from "@components/common/sidebar/ElementSidebar";
import RightSidebar from "@components/common/sidebar/RightSidebar";
import { DummyPatientList } from "constant/DummyPatientList";
import usePaginationStore from "store/usePaginationStore";
import useSelectUserStore from "store/useSelectUserStore";

const EditPage = () => {
  const { patientDataId } = useParams();
  // const router = useRouter();
  const { setUser } = useSelectUserStore();
  const examinationId = Array.isArray(patientDataId) ? patientDataId[0].slice(0, 9) : patientDataId.slice(0, 9);
  // const date = Array.isArray(patientDataId) ? patientDataId[0].slice(9) : patientDataId.slice(9);
  const pages = usePaginationStore(state => state.pages);
  const currentPageIndex = usePaginationStore(state => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];

  useEffect(() => {
    const foundPatient = DummyPatientList.find(patient => patient.examinationId === examinationId);
    // Date 를 통해서 notFound로 가는 로직 필요
    if (!foundPatient) {
      notFound();
    }
    setUser(foundPatient);
    // resetPages(examinationId, date);
    // router.push(`/edit/${foundPatient.examinationId}${date}`);
    console.log(pages);
  }, [examinationId]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-and-drop-area">
        <DropContainer pageId={currentPage} />
      </div>
      <ElementSidebar pageId={currentPage} />
      <RightSidebar pageId={currentPage} />
    </DndProvider>
  );
};

export default EditPage;
