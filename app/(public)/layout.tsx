import Image from "next/image";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const posterPath = {
    signup: "/images/signup-poster.png",
    login: "/images/login-poster.png"
  }

  return (
    <section>
      <div className="w-full">
        <div className="flex flex-col md:flex-row flex-wrap items-strech min-h-screen">
          <div className="w-full md:w-5/12 bg-[#E2ECF8] flex items-center">
            <Image
              src={posterPath.signup}
              alt="Poster"
              width={606}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-7/12 flex items-center justify-center ">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
