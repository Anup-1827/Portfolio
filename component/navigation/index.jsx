"use client";

import { BtnList } from "@/lib/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import {motion} from "framer-motion"

function Navigation() {
  const screeenSize = useScreenSize();

  const container = {
    hidden: {
      opacity :0
    },
    show:{
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    }
  }

  const isLarge = screeenSize >= 1024;
  const isMedium = screeenSize >= 768;

  const radianIncrement = (2 * Math.PI) / BtnList.length;
  const radius = isLarge
    ? screeenSize * 0.22 - 16
    : isMedium
    ? screeenSize * 0.4 - 16
    : screeenSize * 0.3 -16;

  return (
    <div className="w-full fixed h-screen flex items-center justify-between px-2 xs:justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative group text-white animate-spin-slow hover:pause">
              {BtnList.map((btn, index) => {
                const angle = index * radianIncrement;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return <NavButton key={index} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col space-y-5">
              {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                return <NavButton key={index} x={0} y={0} {...btn} labelDirection="left" />;
              })}
            </motion.div>
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col space-y-5">
              {BtnList.slice(BtnList.length / 2).map((btn, index) => {
                return <NavButton key={index} x={0} y={0} {...btn} labelDirection="right" />;
              })}
            </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
}

export default Navigation;
