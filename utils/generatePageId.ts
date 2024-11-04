export const generatePageId = (name: string, date: string, pageNumber: number): string => {
  return `${name}${date}${pageNumber}`;
};
