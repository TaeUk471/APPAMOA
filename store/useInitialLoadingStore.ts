import { create } from "zustand";

interface InitialLoadingStoreProps {
  isInitialLoading: boolean;
  setIsInitialLoading: () => void;
}

const useInitialLoadingStore = create<InitialLoadingStoreProps>(set => ({
  isInitialLoading: true,
  setIsInitialLoading: () => set({ isInitialLoading: false }),
}));
export default useInitialLoadingStore;
