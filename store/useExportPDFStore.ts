"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { create } from "zustand";

const useExportPDFStore = create(() => ({
  handleExportPDF: async (pageId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(`a4-container-${pageId}`);
      if (element) {
        const canvas = await html2canvas(element, { scale: 2 });
        const imageData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("document.pdf");
      }
    }
  },
}));

export default useExportPDFStore;
