import RenderModel from "@/component/RenderModel";
import FireFliesBackground from "@/component/FireFliesBackground";
import Staff from "@/component/models/Staff";
import Projects from "@/component/projects";
import { projectsData } from "@/lib/data";

import HomeButton from "@/component/HomeButton";
import Image from "next/image";
import bg from "../../../public/background/projects-background.png"

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
    <HomeButton/>
    <Projects projectsData={projectsData}/>

    <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-16 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
        <FireFliesBackground />
      </div>
   </>
  );
}
