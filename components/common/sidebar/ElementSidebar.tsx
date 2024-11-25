"use client";

import UploadDiv from "./ElementSIdebar/UploadDiv";
import UploadImage from "./ElementSIdebar/UploadImage";
import UploadPreformattedText from "./ElementSIdebar/UploadPreformattedText";
import UploadTable from "./ElementSIdebar/UploadTable";
import UploadTemplate from "./ElementSIdebar/UploadTemplate";
import UploadTextArea from "./ElementSIdebar/UploadTextArea";

const ElementSidebar = ({ pageId }: { pageId: string }) => {
  return (
    <div className="relative">
      <UploadImage pageId={pageId} />
      <UploadDiv pageId={pageId} />
      <UploadTable pageId={pageId} />
      <UploadTextArea pageId={pageId} />
      <UploadPreformattedText pageId={pageId} />
      <UploadTemplate pageId={pageId} />
    </div>
  );
};

export default ElementSidebar;
