import usePageDataStore from "store/usePageDataStore";
import { PageData } from "types/componenttype";

interface UseUploadJsonParams {
  event: React.ChangeEvent<HTMLInputElement>;
  pageId: string;
  componentId: string;
  componentType: keyof PageData;
}

const useUploadJson = () => {
  const handleUploadData = usePageDataStore(state => state.updateComponent);

  const uploadJson = ({ event, pageId, componentId, componentType }: UseUploadJsonParams) => {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type === "application/json") {
          const reader = new FileReader();

          reader.onload = e => {
            if (e.target?.result) {
              try {
                const jsonData = JSON.parse(e.target.result as string);
                handleUploadData(pageId, componentType, componentId, jsonData);
              } catch (error) {
                console.error("Failed to parse JSON file.", error);
              }
            }
          };

          reader.readAsText(file);
        } else {
          alert("Only .json files are allowed.");
        }
      }
    }
  };

  return uploadJson;
};

export default useUploadJson;
