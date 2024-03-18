"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from "clsx";
import React, { Suspense } from 'react'

function RenderModel({children, className}) {
  return (
    <Canvas
    className={clsx("w-screen h-screen -z-10 relative", className)}
    shadows={false}
    
    >
        <Suspense fallback={null}>
            {children}
            <Environment preset='dawn'/>
        </Suspense>
    </Canvas>
  )
}

export default RenderModel