import React from 'react'


function SubpageLayout({children}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    {children}
   </main>
  )
}

export default SubpageLayout