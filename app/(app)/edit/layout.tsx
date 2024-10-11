import { ReactNode } from "react";

import Footer from "@components/common/Footer";
import GNB from "@components/common/GNB";
import Sidebar from "@components/common/Sidebar";

export default function EditLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GNB />
      <div className="flex flex-1">
        <div className="flex-1">{children}</div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
