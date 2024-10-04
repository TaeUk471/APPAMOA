// styles/button.css.ts
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  backgroundColor: "#333",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "16px",
  ":hover": {
    backgroundColor: "#555",
  },
});

export const primaryButtonStyle = style({
  backgroundColor: "#0070f3",
  ":hover": {
    backgroundColor: "#005bb5",
  },
});
