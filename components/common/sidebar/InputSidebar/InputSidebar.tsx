import { useEffect, useState } from "react";

import useToggle from "@hooks/useToggle";
import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";
import {
  DivComponentData,
  ImageComponentData,
  SelectImageComponentData,
  TableComponentData,
  TextareaComponentData,
} from "types/componenttype";

const InputSidebar = ({ pageId }: { pageId: string }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle();
  const selectedComponentId = useSelectionStore(state => state.selectedComponentId);
  const pages = usePageDataStore(state => state.pages);
  const pageData = pages[pageId];
  const [selectedComponentData, setSelectedComponentData] = useState<
    ImageComponentData | DivComponentData | TableComponentData | TextareaComponentData | SelectImageComponentData
  >();

  useEffect(() => {
    if (selectedComponentId && pageData) {
      const sets = [
        pageData.imageSet,
        pageData.divSet,
        pageData.tableSet,
        pageData.textareaSet,
        pageData.selectImageSet,
      ];
      sets.some(set => {
        const foundComponent = set.find(item => item.id === selectedComponentId);
        if (foundComponent) {
          setSelectedComponentData(foundComponent);
          return true;
        }
        return false;
      });
    }
  }, [selectedComponentId, pageData]);

  return (
    <div
      className={`bg-purple-700 fixed top-25 right-0 transition-all
    ${isSidebarOpen ? "w-[400px] h-5/6 top-[75px] bg-purple-400" : "w-14 h-fit top-[80px]"} px-4 py-3 rounded-l-xl flex flex-col`}>
      <div className={"flex justify-between items-center"}>
        <button onClick={toggleSidebar} className="cursor-pointer flex items-center justify-center h-8">
          {isSidebarOpen ? <i className="fas fa-times text-white" /> : <i className="fas fa-bars text-white" />}
        </button>
      </div>
      {isSidebarOpen && selectedComponentData && (
        <div
          className={"flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200"}>
          {Object.entries(selectedComponentData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSidebar;
