export const buttonSize: {
  [size: string]: string;
} = {
  xs: "px-3 py-4",
  s: "px-3 py-4",
  m: "px-3 py-4",
  l: "px-3 py-4",
  xl: "px-3 py-4",
  "2xl": "px-3 py-4",
  "3xl": "px-3 py-4",
  huge: "px-12 py-12",
};

export type ButtonSizeType = "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "huge";

export const buttonColor: {
  [color: string]: string;
} = {
  primary: "bg-purple-500 text-white hover:bg-purple-700",
  example: "bg-white text-black hover: bg-gray-200",
};

export type ButtonColorType = "primary" | "example";
