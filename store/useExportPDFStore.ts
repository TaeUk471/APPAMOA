"use client";

import { create } from "zustand";

const useExportPDFStore = create(() => ({
  handleExportPDF: async (pageId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(`a4-container-${pageId}`);
      if (element) {
        const html2pdf = (await import("html2pdf.js")).default;
        console.log("몇번 실행돼!?");
        html2pdf().from(element).save();
      }
    }
  },
}));

export default useExportPDFStore;
