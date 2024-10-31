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

export interface DivComponentData extends BaseComponentData {
  color: string;
}

export interface TableComponentData extends BaseComponentData {
  rows: number;
  columns: number;
}

export interface TextareaComponentData extends BaseComponentData {
  placeholder: string;
  underline: boolean;
}

export interface PageData {
  imageSet: ImageComponentData[];
  divSet: DivComponentData[];
  tableSet: TableComponentData[];
  textareaSet: TextareaComponentData[];
}
