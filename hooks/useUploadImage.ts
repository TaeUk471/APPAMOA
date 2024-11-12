import { useCallback } from "react";

import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";

interface UploadImageParams {
  event: React.ChangeEvent<HTMLInputElement>;
  pageId: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const useUploadImage = () => {
  const handleUploadImage = usePageDataStore(state => state.addImageComponent);
  const handleUploadSelectImage = usePageDataStore(state => state.addSelectImageComponent);
  const deleteSelectImage = usePageDataStore(state => state.deleteComponent);

  const uploadImage = useCallback(
    ({ event, pageId, x, y, width, height }: UploadImageParams) => {
      const selectedComponentId = useSelectionStore.getState().selectedComponentId;
      const files = event.target.files;

      if (!files) return;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          alert("이미지 파일만 선택할 수 있습니다.");
          return;
        }

        const imageUrl = URL.createObjectURL(file);

        if (x !== undefined && y !== undefined && width !== undefined && height !== undefined) {
          if (selectedComponentId) {
            deleteSelectImage(pageId, "selectImageSet", selectedComponentId);
          }
          handleUploadSelectImage(pageId, imageUrl, x, y, width, height);
        } else {
          handleUploadImage(pageId, imageUrl);
        }
      }
    },
    [handleUploadImage, handleUploadSelectImage, deleteSelectImage]
  );

  return uploadImage;
};

export default useUploadImage;
