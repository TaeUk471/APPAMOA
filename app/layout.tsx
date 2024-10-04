// app/layout.tsx
import { ReactNode } from "react";

import "../styles/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>APPAMOA</title>
        <meta name="description" content="This is an awesome website about healthcare." />
        <meta name="keywords" content="healthcare, health, web app" />
        <meta property="og:title" content="APPAMOA" />
        <meta property="og:description" content="This is an awesome website about healthcare." />
        <meta property="og:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
