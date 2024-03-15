import Image from "next/image";
import bg from "../public/background/home-background.png"
import RenderModel from "@/component/RenderModel";
import Wizard from "@/component/models/Wizard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        fill
        sizes="100vw"
        src={bg}
        alt="homebackground"
        className="-z-50 w-full h-full object-cover object-center"
      />

      <div className="h-screen">
          <RenderModel>
            <Wizard/>
          </RenderModel>
      </div>
    </main>
  );
}
