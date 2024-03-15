/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 hat.glb --transform 
Files: hat.glb [227.05KB] > D:\Projects\portfolio\public\models\hat-transformed.glb [226KB] (0%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hat-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} position={[0, -3.867, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/hat-transformed.glb')
