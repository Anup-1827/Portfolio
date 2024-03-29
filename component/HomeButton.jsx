import React from 'react'
import NavButton from './navigation/NavButton'

function HomeButton({labelDirection}) {
  return (
    <div className='top-4 left-4 fixed z-50'>
        <NavButton x={0} y={0} label={"Home"} link={"/"} icon="home" labelDirection={labelDirection} newTab={false} animated={false}/>
    </div>
  )
}

export default HomeButton