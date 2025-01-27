import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'

function AnimatedHeading({text, textOnHover}) {
    const [hoverText,setHoverText]= useState()

    const headingRef = useRef(null)
    useGSAP(()=>{

    })
  return (
  <div>
    <h2 
    onMouseEnter={()=>setHoverText(textOnHover)} 
    onMouseLeave={()=>{setHoverText(text)}} 
    className="py-2 px-1 hover:bg-black">
    {hoverText ? hoverText : text}
    </h2>
  </div>
  )
}

export default AnimatedHeading