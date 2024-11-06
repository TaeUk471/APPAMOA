import { create } from "zustand";

interface SelectUserState {
  user: { examinationId: string; name: string };
  setUser: ({ examinationId, name }: { examinationId: string; name: string }) => void;
}

const useSelectUserStore = create<SelectUserState>(set => ({
  user: { examinationId: "805605462", name: "김니엘" },
  setUser: ({ name, examinationId }) => set({ user: { name, examinationId } }),
}));

export default useSelectUserStore;
