export const generatePageId = (name: string, examinationId: string, pageNumber: number): string => {
  return `${name}${examinationId}${pageNumber}`;
};
