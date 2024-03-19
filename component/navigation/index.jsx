"use client"

import { BtnList } from '@/lib/data'
import React from 'react'
import NavButton from './NavButton';

function Navigation() {
    // const angleIncrement = 360 / BtnList.length;

    const radianIncrement = 2 * Math.PI / BtnList.length;
    const radius =  window.innerWidth * 0.2 - 16;  
    // const radius =  600;  

  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
        <div className='w-max flex items-center justify-center relative group text-white animate-spin-slow hover:pause'>
            {
                BtnList.map((btn, index)=>{
                    const angle = index * radianIncrement;
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    // const angleRad = (index * angleIncrement * Math.PI) / 180;
                    // const radius = "calc(20vw - 1rem)";

                    // const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    // const y = `calc(${radius}*${Math.sin(angleRad)})`;
                    
                    return( <NavButton key={index} x={x} y={y} {...btn}/>)
                })
            }
        </div>
    </div>
  )
}

export default Navigation