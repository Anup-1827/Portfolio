import React from 'react'

import HomeButton from "@/component/HomeButton";
import Image from "next/image";
import bg from "../../public/background/projects-background.png"

// "../../../public/background/projects-background.png";


function SubpageLayout({children}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    <Image
      priority
      sizes="100vw"
      src={bg}
      alt="homebackground"
      className="-z-50 w-full h-full fixed object-cover object-center grayscale-[30%]"
    />
    <HomeButton/>
    {children}
   </main>
  )
}

export default SubpageLayout