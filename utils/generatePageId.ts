export const generatePageId = (examinationId: string, date: string, pageNumber: number): string => {
  return `${examinationId}${date}${pageNumber}`;
};
