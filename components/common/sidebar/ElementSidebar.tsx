"use client";

import UploadDiv from "./ElementSIdebar/UploadDiv";
import UploadImage from "./ElementSIdebar/UploadImage";
import UploadTable from "./ElementSIdebar/UploadTable";
import UploadTextArea from "./ElementSIdebar/UploadTextArea";

const ElementSidebar = () => {
  return (
    <div className="relative">
      <UploadImage />
      <UploadDiv />
      <UploadTable />
      <UploadTextArea />
    </div>
  );
};

export default ElementSidebar;
