// layout.tsx
import { ReactNode } from "react";

import "../style/globals.js";
import StyledComponentRegistry from "@lib/styledComponentRegistry";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentRegistry>
          {children}
        </StyledComponentRegistry>
      </body>
    </html>
  );
}
