import { getDocument, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

import usePageDataStore from "store/usePageDataStore";
import usePaginationStore from "store/usePaginationStore";

export const processPDF = async (pdfUrl: string, pageId: string, specificPage?: number, maxPages: number = 60) => {
  const addSelectImageComponent = usePageDataStore.getState().addSelectImageComponent;
  const addPage = usePaginationStore.getState().addPage;

  try {
    const pdfDocument: PDFDocumentProxy = await getDocument(pdfUrl).promise;

    if (pdfDocument.numPages > maxPages) {
      alert(`PDF는 최대 ${maxPages}장까지 업로드할 수 있습니다.`);
      return;
    }

    const examinationId = pageId.slice(0, 9);
    const date = pageId.slice(9, 17);

    const processPage = async (pageNum: number) => {
      const page: PDFPageProxy = await pdfDocument.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Canvas context could not be created");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;
      const imageData = canvas.toDataURL("image/png");

      addPage(examinationId, date);
      const newPageId = `${examinationId}${date}${pageNum}`;
      addSelectImageComponent(newPageId, imageData, 0, 0, 793.7, 1122.3);
    };

    if (specificPage) {
      await processPage(specificPage);
    } else {
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        await processPage(i);
      }
    }
  } catch (error) {
    console.error("Error processing PDF:", error);
  }
};
