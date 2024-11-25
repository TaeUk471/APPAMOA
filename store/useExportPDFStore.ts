"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { create } from "zustand";

import usePaginationStore from "store/usePaginationStore";

const useExportPDFStore = create(() => ({
  handleExportCurrentPagePDF: async (pageId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(`a4-container-${pageId}`);
      if (element) {
        const canvas = await html2canvas(element, { scale: 2 });
        const imageData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`document-page-${pageId}.pdf`);
      }
    }
  },

  handleExportAllPagesPDF: async () => {
    if (typeof window !== "undefined") {
      const pages = usePaginationStore.getState().pages;
      const pdf = new jsPDF("p", "mm", "a4");
      for (let i = 0; i < pages.length; i++) {
        const pageId = pages[i];
        const element = document.getElementById(`a4-container-${pageId}`);

        if (element) {
          const canvas = await html2canvas(element, { scale: 2 });
          const imageData = canvas.toDataURL("image/png");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          if (i > 0) pdf.addPage();

          pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
        }
      }

      pdf.save("document-all-pages.pdf");
    }
  },
}));

export default useExportPDFStore;
