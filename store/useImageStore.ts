import { create } from "zustand";

interface ImageStoreProps {
  imageUrls: string[];
  AddImageUrls: (newImageUrl: string) => void;
}

const useImageStore = create<ImageStoreProps>(set => ({
  imageUrls: [],
  AddImageUrls: newImageUrl =>
    set(state => ({
      imageUrls: [...state.imageUrls, newImageUrl],
    })),
}));
export default useImageStore;
