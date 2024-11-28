"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import Footer from "@components/common/Footer";
import EditHeader from "@components/common/header/EditHeader";

export default function TemplateLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen">
      <EditHeader />
      <div
        className={`flex flex-1 bg-gradient-to-t to-white mt-2 py-5 ${pathname?.includes("/template") ? "from-blue-300" : "from-purple-300"}`}>
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
