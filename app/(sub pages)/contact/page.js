import RenderModel from "@/component/RenderModel";
import FireFliesBackground from "@/component/FireFliesBackground";
import Staff from "@/component/models/Staff";
import Projects from "@/component/projects";
import { projectsData } from "@/lib/data";

import HomeButton from "@/component/HomeButton";
import Image from "next/image";
import bg from "../../../public/background/contact-background.png";
import { Hat } from "@/component/models/Hat";
import AboutDetails from "@/component/about";
import Form from "@/component/contact/Form";

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
      <HomeButton labelDirection="left" />

      <article className="relative h-screen w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-6xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center text-lg xs:text-white">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
