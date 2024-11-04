import { ReactNode } from "react";

import Footer from "@components/common/Footer";
import GNB from "@components/common/GNB";

//오직 PC 버전만 지원
export default function EditLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GNB />
      <div className="flex flex-1 bg-slate-300">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
