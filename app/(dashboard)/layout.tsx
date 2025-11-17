import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row flex-wrap items-strech min-h-screen">
        <div className="w-full md:w-[300px] hidden md:flex flex-col justify-between bg-bgDark h-screen overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full md:w-[calc(100vw-300px)]">
          <TopBar />
          <div className="h-[calc(100vh-92px)] overflow-y-auto bg-[#E2ECF8]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
