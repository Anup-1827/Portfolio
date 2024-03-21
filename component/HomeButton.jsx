import React from 'react'
import NavButton from './navigation/NavButton'

function HomeButton() {
  return (
    <div className='top-4 left-4 fixed'>
        <NavButton x={0} y={0} label={"Home"} link={"/"} icon="home" newTab={false} animated={false}/>
    </div>
  )
}

export default HomeButton