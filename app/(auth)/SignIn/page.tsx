// app/(auth)/signin/page.tsx
import * as S from "@styles/auth/auth.css";

import AuthLayout from "../layout";

export default function SignIn() {
  return (
    <AuthLayout>
      <h1 className={S.title}>Sign In</h1>
      <input className={S.input} type="email" placeholder="Email" />
      <input className={S.input} type="password" placeholder="Password" />
      <button className={S.button}>Sign In</button>
    </AuthLayout>
  );
}
