"use client"

import React, { useEffect, useState } from 'react'

const createFireFly = ()=>{
    return({
        id: Math.random(),
        top : `${Math.random() * 100}%`,
        left : `${Math.random() * 100}%`,
        animationDuration : `${Math.random() * 5 + 5}`
    })
}


function FireFliesBackground() {

    const [fireFlies, setFireFlies] = useState([]);

    useEffect(()=>{

        const addNewFireFly = ()=>{
            const newFireFly = createFireFly();
            setFireFlies(prevState=>{
                return[
                    ...prevState.slice(-14),
                    newFireFly
                ]
            })
        }

        const interval = setInterval(addNewFireFly, 1000)

        return ()=>clearInterval(interval)
    },[])

  return (
    <div className='-z-10 fixed w-screen h-screen top-0 left-0 overflow-hidden'>
        {
            fireFlies.map(fireFly=>{
                return(
                    <div key={fireFly.id} 
                    style={{
                        top: fireFly.top,
                        left: fireFly.left,
                        animation: `move ${fireFly.animationDuration}s linear infinite`
                    }}
                    className='absolute w-[10px] h-[10px] rounded-full bg-firefly-radial'
                    >
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default FireFliesBackground