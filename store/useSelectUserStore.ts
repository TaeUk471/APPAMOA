import { create } from "zustand";

interface SelectUserState {
  user: { examinationId: string; name: string };
  setUser: ({ examinationId, name }: { examinationId: string; name: string }) => void;
}

const useSelectUserStore = create<SelectUserState>(set => ({
  user: { examinationId: "", name: "" },
  setUser: ({ name, examinationId }) => set({ user: { name, examinationId } }),
}));

export default useSelectUserStore;
