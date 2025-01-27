import React, { createContext } from 'react'

const InfoContext = createContext()
function InforModel({children}) {
  return (
    <InfoContext.Provider>
        <div className='bg-zinc-800 p-6 w-1/4 h-[30vh] font-["manrope"] flex flex-col'>
        {children}
        </div>
    </InfoContext.Provider>
  )
}

function Header({children}) {
    
    return (
        <div className='font-black text-4xl'>
        {children}
        </div>
    )
}

function Body ({children}) {
    return (
        <div className=' h-20% '>
        {children}
        </div>
    )
}

InforModel.Header = Header;
InforModel.Body = Body;


export default InforModel