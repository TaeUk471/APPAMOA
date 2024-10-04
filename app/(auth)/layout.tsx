import { ReactNode } from "react";

import * as S from "@styles/auth/auth.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={S.container}>
      <div className={S.authBox}>{children}</div>
    </div>
  );
}
