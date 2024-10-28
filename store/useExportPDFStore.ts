import html2pdf from "html2pdf.js";
import { create } from "zustand";

const useExportPDFStore = create(() => ({
  handleExportPDF: (index: number) => {
    const element = document.getElementById(`a4-container-${index}`);
    if (element) {
      html2pdf().from(element).save();
    }
  },
}));

export default useExportPDFStore;
