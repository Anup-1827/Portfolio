import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import NavButton from "../navigation/NavButton";


const item = {
  hidden: {
    opacity:0, y: 100
  },
  show:{
    opacity:1, y:0
  }
}

const ProjectLink = motion(Link)
const GithubLink = motion(Link)

function ProjectLayout({ name, description, date, demoLink, githubLink }) {
  console.log("GithubLink ", githubLink);
  return (
    <div className="flex gap-5 w-full">
    <ProjectLink 
      variants={item}
      href={demoLink}
      target={"_blank"}
      className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg ">
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </ProjectLink>
    {/* <GithubLink
      variants={item}
      href={"#"}
      className="text-white" 
    >
      <
    </GithubLink> */}
    <div className="relative pt-2">

    <NavButton
      x={0}
      y={0}
      label={"Github"}
      link={githubLink || "#"}
      icon="github"
      newTab={true}
      labelDirection = "left"
      animated = {false}
      />
      </div>
    </div>
  );
}

export default ProjectLayout;
