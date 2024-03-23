"use client";

import { BtnList } from "@/lib/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";

function Navigation() {
  // const angleIncrement = 360 / BtnList.length;
  const screeenSize = useScreenSize();

//   console.log("Screen", screeenSize);
  const isLarge = screeenSize >= 1024;
  const isMedium = screeenSize >= 768;

  const radianIncrement = (2 * Math.PI) / BtnList.length;
  const radius = isLarge
    ? screeenSize * 0.22 - 16
    : isMedium
    ? screeenSize * 0.4 - 16
    : screeenSize * 0.3 -16;
//   console.log("isMeduim ", isMedium);

  return (
    <div className="w-full fixed h-screen flex items-center justify-between px-2 xs:justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className="w-max flex items-center justify-center relative group text-white animate-spin-slow hover:pause">
              {BtnList.map((btn, index) => {
                const angle = index * radianIncrement;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                // const angleRad = (index * angleIncrement * Math.PI) / 180;
                // const radius = "calc(20vw - 1rem)";

                // const x = `calc(${radius}*${Math.cos(angleRad)})`;
                // const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={index} x={x} y={y} {...btn} />;
              })}
            </div>
          ) : (
            <>
            <div className="flex flex-col space-y-5">
              {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                return <NavButton key={index} x={0} y={0} {...btn} labelDirection="left" />;
              })}
            </div>
            <div className="flex flex-col space-y-5">
              {BtnList.slice(BtnList.length / 2).map((btn, index) => {
                return <NavButton key={index} x={0} y={0} {...btn} labelDirection="right" />;
              })}
            </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
}

export default Navigation;
