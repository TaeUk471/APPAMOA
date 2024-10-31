import { create } from "zustand";

interface ImageData {
  id: string;
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageStoreProps {
  images: ImageData[];
  setImages: (images: ImageData[]) => void;
  updateImagePosition: (id: string, x: number, y: number) => void;
  updateImageSize: (id: string, width: number, height: number) => void;
}

const useImageStore = create<ImageStoreProps>(set => ({
  images: [],
  setImages: images => set({ images }),
  updateImagePosition: (id, x, y) =>
    set(state => ({
      images: state.images.map(img => (img.id === id ? { ...img, x, y } : img)),
    })),
  updateImageSize: (id, width, height) =>
    set(state => ({
      images: state.images.map(img => (img.id === id ? { ...img, width, height } : img)),
    })),
}));

export default useImageStore;
