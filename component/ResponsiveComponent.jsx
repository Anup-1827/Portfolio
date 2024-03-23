import React from 'react'
import useScreenSize from './hooks/useScreenSize'

function ResponsiveComponent({children}) {
    const size = useScreenSize();
    return (
        <>
        {
            children({size})
        }
    </>
  )
}

export default ResponsiveComponent