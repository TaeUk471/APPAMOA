import processTableData from "@utils/processTableData";
import usePageDataStore from "store/usePageDataStore";

interface UseUploadJsonParams {
  event: React.ChangeEvent<HTMLInputElement>;
  pageId: string;
  componentType: "table" | "text";
}

const useUploadJson = () => {
  const handleUploadTable = usePageDataStore(state => state.addTableComponent);
  const handleUploadPreformattedText = usePageDataStore(state => state.addPreformattedComponent);

  const uploadJson = ({ event, pageId, componentType }: UseUploadJsonParams) => {
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

                if (componentType === "table") {
                  const { rows, columns, data } = processTableData(jsonData);
                  handleUploadTable(pageId, rows, columns, data);
                } else if (componentType === "text") {
                  const textData = jsonData.text;
                  handleUploadPreformattedText(pageId, textData);
                }
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
