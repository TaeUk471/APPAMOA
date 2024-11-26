import { ReactNode } from "react";

import Footer from "@components/common/Footer";
import EditHeader from "@components/common/header/EditHeader";

export default function TemplateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <EditHeader />
      <div className="flex flex-1 bg-gradient-to-t from-purple-300 to-white mt-2 py-5">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
