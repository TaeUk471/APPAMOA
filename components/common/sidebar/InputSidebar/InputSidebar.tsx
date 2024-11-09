import debounce from "lodash/debounce";
import { useEffect, useState, useCallback } from "react";

import useToggle from "@hooks/useToggle";
import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";
import {
  DivComponentData,
  ImageComponentData,
  PreformattedComponentData,
  SelectImageComponentData,
  TableComponentData,
  TextareaComponentData,
} from "types/componenttype";

const InputSidebar = ({ pageId }: { pageId: string }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar, open: doOpen, close: doClose } = useToggle();
  const selectedComponentId = useSelectionStore(state => state.selectedComponentId);
  const pages = usePageDataStore(state => state.pages);
  const pageData = pages[pageId];
  const updateComponent = usePageDataStore(state => state.updateComponent);
  const [selectedComponentData, setSelectedComponentData] = useState<
    | ImageComponentData
    | DivComponentData
    | TableComponentData
    | TextareaComponentData
    | SelectImageComponentData
    | PreformattedComponentData
  >();

  useEffect(() => {
    if (selectedComponentId && pageData) {
      const sets = [
        pageData.imageSet,
        pageData.divSet,
        pageData.tableSet,
        pageData.textareaSet,
        pageData.preformattedSet,
      ];
      sets.some(set => {
        const foundComponent = set.find(item => item.id === selectedComponentId);
        if (foundComponent) {
          setSelectedComponentData(foundComponent);
          doOpen();
          return true;
        }
        return false;
      });
    }
  }, [selectedComponentId, pageData]);

  useEffect(() => {
    if (!selectedComponentId) {
      doClose();
    }
  }, [selectedComponentId, pageId]);

  const debouncedUpdateComponent = useCallback(
    debounce((key: string, value: string) => {
      if (selectedComponentId && pageData) {
        updateComponent(pageId, "textareaSet", selectedComponentId, { [key]: value });
      }
    }, 200),
    [pageId, selectedComponentId, updateComponent]
  );

  const handleInputChange = (key: string, value: string) => {
    setSelectedComponentData(prev => {
      if (!prev) return prev;
      const updatedData = { ...prev, [key]: value };
      debouncedUpdateComponent(key, value);
      return updatedData;
    });
  };

  return (
    <div
      className={`bg-purple-700 fixed top-25 right-0 transition-all
    ${isSidebarOpen ? "w-[250px] h-fit top-[75px] bg-purple-300" : "w-14 h-fit top-[80px]"} px-4 py-3 rounded-l-xl flex flex-col`}>
      <div className={"flex justify-between items-center"}>
        <button onClick={toggleSidebar} className="cursor-pointer flex items-center justify-center h-8">
          {isSidebarOpen ? <i className="fas fa-times text-white" /> : <i className="fas fa-bars text-white" />}
        </button>
      </div>
      {isSidebarOpen && selectedComponentData && (
        <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
          {Object.entries(selectedComponentData)
            .filter(([key]) => key !== "id")
            .map(([key, value]) => (
              <label key={key} className="flex mb-6 flex-wrap">
                <span className="text-white">{key}:</span>
                <input
                  type="text"
                  value={value}
                  onChange={e => handleInputChange(key, e.target.value)}
                  className="w-full p-1 mt-3 bg-white rounded-md"
                />
              </label>
            ))}
        </div>
      )}
    </div>
  );
};

export default InputSidebar;
