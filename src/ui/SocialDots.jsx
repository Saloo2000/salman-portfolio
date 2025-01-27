import React, { useState } from 'react'


const socialDetails = [{icon:"W", name: 'Whatsapp', value:' +923 22 22 55 389'}, {icon:"G", name: 'Gmail', value:'Saloohashmi20@gmail.com'},{icon:"g", name: 'Github', value:'Saloo2000'}]

function SocialDots() {
    const [index, setIndex] = useState()
  return (
    <div className="social-dots absolute right-20 top-[50%] flex items-end flex-col">

{socialDetails.map((dot,i)=>(
      <div 
      key={i}
      onMouseEnter={()=>setIndex(i)}
      onMouseLeave={()=>setIndex(null)} 
      className={`hidden  ${index !== i? "md:w-10" : "md:w-fit"}  md:block whatsapp md:h-10 md:border-[1px] md:border-white md:rounded-full md:flex md:justify-center md:items-center md:my-[15px] md:hover:bg-white md:hover:text-black md:transition md:duration-5000 md:cursor-pointer`}>
         {index !== i ? dot.icon : <h2 className={`font-normal text-zinc-600 ${index !== 1 ? '' : 'block'} px-4 py-8`}><span className='font-bold'>{dot.name}:</span>{dot.value}</h2>}
      </div>
))}


    
    

  </div>
  )
}

export default SocialDots