export interface BaseComponentData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageComponentData extends BaseComponentData {
  url: string;
}

export type SelectImageComponentData = BaseComponentData;

export interface DivComponentData extends BaseComponentData {
  color: string;
}

export interface TableComponentData extends BaseComponentData {
  rows: number;
  columns: number;
  data: RowData[];
}

interface CellData {
  col: number;
  content: string;
}

export interface RowData {
  row: number;
  cells: CellData[];
}

export interface TextareaComponentData extends BaseComponentData {
  placeholder: string;
  underline: boolean;
  content: string;
}

export interface PreformattedComponentData extends BaseComponentData {
  content: string;
}

export interface PageData {
  imageSet: ImageComponentData[];
  divSet: DivComponentData[];
  tableSet: TableComponentData[];
  textareaSet: TextareaComponentData[];
  selectImageSet: SelectImageComponentData[];
  preformattedSet: PreformattedComponentData[];
}
