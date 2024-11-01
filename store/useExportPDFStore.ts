import html2pdf from "html2pdf.js";
import { create } from "zustand";

const useExportPDFStore = create(() => ({
  handleExportPDF: (name: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(`a4-container-${name}`);
      if (element) {
        html2pdf().from(element).save();
      }
    }
  },
}));

export default useExportPDFStore;
