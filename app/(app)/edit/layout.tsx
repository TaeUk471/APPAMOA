import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Footer from "@components/common/Footer";
import GNB from "@components/common/GNB";
import Sidebar from "@components/common/Sidebar";

//오직 PC 버전만 지원
export default function EditLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GNB isEdit={true} />
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-1">
          <div className="flex-1">{children}</div>
          <Sidebar />
        </div>
      </DndProvider>
      <Footer />
    </div>
  );
}
