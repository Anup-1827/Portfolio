"use client"

import React, { useEffect, useState } from 'react'

function useScreenSize() {
    const [screenSize, setScreenSize] = useState()

    useEffect(()=>{
        const getScreenSize = ()=>{
            return window.innerHeight;
        }

        const handleResize = ()=>{
            setScreenSize(getScreenSize())
        }
        handleResize();

        window.addEventListener("resize", handleResize)

        return ()=> window.removeEventListener("resize", handleResize)
    },[])
  return (
   screenSize
  )
}

export default useScreenSize