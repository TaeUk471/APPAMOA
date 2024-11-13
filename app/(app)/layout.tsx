import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-1">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
