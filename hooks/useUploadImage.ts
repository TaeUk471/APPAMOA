import usePageDataStore from "store/usePageDataStore";

const useUploadImage = () => {
  const handleUploadImage = usePageDataStore(state => state.addImageComponent);

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>, pageId: string) => {
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
  };

  return uploadImage;
};

export default useUploadImage;
