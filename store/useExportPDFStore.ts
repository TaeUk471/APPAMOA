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
        pdf.save(`단일출력-${pageId}.pdf`);
      }
    }
  },

  handleExportAllPagesPDF: async () => {
    if (typeof window !== "undefined") {
      const pages = usePaginationStore.getState().pages;
      if (pages.length === 0) {
        console.error("페이지가 없습니다.");
        return;
      }

      const basePageId = pages[0].slice(0, 17);
      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < pages.length; i++) {
        const currentPageId = pages[i];
        console.log(currentPageId);
        const element = document.getElementById(`a4-container-${currentPageId}`);

        if (element) {
          const canvas = await html2canvas(element, { scale: 2 });
          const imageData = canvas.toDataURL("image/png");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          if (i > 0) pdf.addPage(); // 첫 페이지 이후에 추가

          pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
        } else {
          console.warn(`Element with ID a4-container-${currentPageId} not found.`);
        }
      }

      pdf.save(`전체출력-${basePageId}.pdf`);
    }
  },
}));

export default useExportPDFStore;
