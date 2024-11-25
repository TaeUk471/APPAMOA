"use client";

import InputSidebar from "./InputSidebar/InputSidebar";
import ExportPDFButton from "./RightSidebar/ExportPDFButton";

const RightSidebar = ({ pageId }: { pageId: string }) => {
  return (
    <div className="relative">
      <InputSidebar pageId={pageId} />
      <ExportPDFButton pageId={pageId} />
    </div>
  );
};

export default RightSidebar;
