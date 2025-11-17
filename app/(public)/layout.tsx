import ImageBanner from "@/components/page-content/public-pages/ImageBanner";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {

  return (
    <section>
      <div className="w-full">
        <div className="flex flex-col md:flex-row flex-wrap items-strech min-h-screen">
          <div className="w-full md:w-5/12 bg-[#E2ECF8] flex items-center">
            <ImageBanner />
          </div>
          <div className="w-full md:w-7/12 flex items-center justify-center ">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
