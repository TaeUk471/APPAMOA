// 추후 반드시 보강 필요. 분기가 arg의 갯수라는건 명확하지 않음!

import { useCallback } from "react";

import usePageDataStore from "store/usePageDataStore";
import useSelectionStore from "store/useSelectionStore";

const useUploadImage = () => {
  const handleUploadImage = usePageDataStore(state => state.addImageComponent);
  const handleUploadSelectImage = usePageDataStore(state => state.addSelectImageComponent);
  const deleteSelectImage = usePageDataStore(state => state.deleteComponent);

  const uploadImage = useCallback(
    (
      ...args:
        | [React.ChangeEvent<HTMLInputElement>, string]
        | [React.ChangeEvent<HTMLInputElement>, string, number, number, number, number]
    ) => {
      const getSelectedComponentId = () => useSelectionStore.getState().selectedComponentId;

      if (args.length === 2) {
        const [event, pageId] = args;
        const files = event.target.files;

        if (files) {
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith("image/")) {
              const imageUrl = URL.createObjectURL(file);
              handleUploadImage(pageId, imageUrl);
            } else {
              alert("이미지 파일만 선택할 수 있습니다.");
            }
          }
        }
      } else if (args.length === 6) {
        const [event, pageId, x, y, width, height] = args;
        const files = event.target.files;

        if (files) {
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith("image/")) {
              const imageUrl = URL.createObjectURL(file);
              const selectedComponentId = getSelectedComponentId();
              if (selectedComponentId !== null) {
                deleteSelectImage(pageId, "selectImageSet", selectedComponentId);
              }
              handleUploadSelectImage(pageId, imageUrl, x, y, width, height);
            } else {
              alert("이미지 파일만 선택할 수 있습니다.");
            }
          }
        }
      } else {
        throw new Error("Invalid number of arguments passed to uploadImage.");
      }
    },
    [handleUploadImage, handleUploadSelectImage, deleteSelectImage]
  );

  return uploadImage;
};

export default useUploadImage;
