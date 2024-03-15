"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Environment } from '@react-three/drei'

function RenderModel({children}) {
  return (
    <Canvas>
        <Suspense fallback={null}>
            {children}
            <Environment preset='dawn'/>
        </Suspense>
    </Canvas>
  )
}

export default RenderModel