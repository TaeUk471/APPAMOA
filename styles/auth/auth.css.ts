// styles/auth.css.ts
import { style } from "@vanilla-extract/css";

import { theme } from "@styles/theme.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: theme.color.gray_500,

  "@media": {
    [theme.device.mobile]: {
      backgroundColor: theme.color.black_600,
    },
  },
});

export const authBox = style({
  backgroundColor: theme.color.white,
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
});

export const title = style({
  fontSize: theme.fontSize.large,
  fontWeight: "bold",
  marginBottom: "1.5rem",
  textAlign: "center",
});

export const input = style({
  width: "100%",
  padding: "0.75rem",
  fontSize: theme.fontSize.normal,
  marginBottom: "1rem",
  borderRadius: "8px",
  border: `0.1rem solid ${theme.color.gray_900}`,
  outline: "none",
});

export const button = style({
  width: "100%",
  padding: "0.75rem",
  backgroundColor: theme.color.blue_400,
  color: theme.color.white,
  fontWeight: "bold",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.blue_400,
  },
});
