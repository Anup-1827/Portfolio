import RenderModel from "@/component/RenderModel";
import FireFliesBackground from "@/component/FireFliesBackground";
import Staff from "@/component/models/Staff";
import Projects from "@/component/projects";
import { projectsData } from "@/lib/data";

import HomeButton from "@/component/HomeButton";
import Image from "next/image";
import bg from "../../../public/background/about-background.png";
import { Hat } from "@/component/models/Hat";
import AboutDetails from "@/component/about";

export default function Page() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="homebackground"
        className="-z-50 w-full h-full fixed object-cover object-center grayscale-[30%]"
      />
      <HomeButton labelDirection="left"/>

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 overflow-x-hidden">
        <RenderModel>
          <Hat />
        </RenderModel>  
      </div>
        <FireFliesBackground />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full pt-20 sm:pt-0 px-3 flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2  -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Anup Alone</h1>
          <p className="font-bold text-white mt-10 text-sm xs:text-lg sm:text-xl lg:text-3xl">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
