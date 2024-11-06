"use client";

import UploadData from "./ElementSIdebar/UploadData";
import UploadDiv from "./ElementSIdebar/UploadDiv";
import UploadImage from "./ElementSIdebar/UploadImage";
import UploadTable from "./ElementSIdebar/UploadTable";
import UploadTextArea from "./ElementSIdebar/UploadTextArea";

const ElementSidebar = ({ pageId }: { pageId: string }) => {
  return (
    <div className="relative">
      <UploadImage pageId={pageId} />
      <UploadDiv pageId={pageId} />
      <UploadTable pageId={pageId} />
      <UploadTextArea pageId={pageId} />
      <UploadData pageId={pageId} />
    </div>
  );
};

export default ElementSidebar;
