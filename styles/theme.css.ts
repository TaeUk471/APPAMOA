// styles/theme.css.ts
import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    white: "#ffffff",
    black_900: "#000000",
    black_800: "#171717",
    black_700: "#333236",
    black_600: "#4b4b4b",
    black_overlay: "#4d4d4d",
    gray_900: "#787486",
    gray_800: "#9fa6b2",
    gray_700: "#d9d9d9",
    gray_600: "#eeeeee",
    gray_500: "#fafafa",
    pink_900: "#ff7b7b",
    pink_400: "#ffcece",
    blue_400: "#76a5ea",
    purple_100: "#e0ccf2",
    purple_500: "#8061e2",
    yellow_100: "#f9e7d6",
    yellow_500: "#ffd944",
  },
  fontSize: {
    large: "1.8rem",
    normal: "1.6rem",
    small: "1.4rem",
    extraSmall: "1.2rem",
  },
  device: {
    tablet: "(min-width: 768px) and (max-width : 1023px)",
    mobile: "(max-width: 767px)",
  },
});
