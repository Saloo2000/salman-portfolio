import React from 'react'

function MyDetailsPhone() {
  return (
    <div ref={elementRef} className="person-info pt-[12rem] ">
    <div className="details flex flex-col md:flex-row text-[1.2rem]">
    <div className='w-1/5 text-zinc-600 font-["manrope"] font-semibold'>
    <h2>NAME :</h2> 
    <h2>LOCATION :</h2> 
    <h2>PROFESSION :</h2> 
    </div>

    <div className='w-3/4'>

  <div>
    <h2>SALMAN SHAH</h2>
    <h2>MALIR 15 FLYOUR, KARACHI, SINDH, PAKISTAN</h2>
    <h2>MERNSTACK DEVELOPER + UI UX DESIGNER (MID LEVEL)</h2>
  </div>

    <div className='pt-8 flex'>

    <div className='w-1/4 text-zinc-600'>
    <h2>EXPERIENCE :</h2> 
    <h2>PROJECTS :</h2> 
    <h2 className='pt-[6rem]'>SKILLS :</h2>
    {/* <h2 className='mt-8 py-1 px-6 text-white border-zinc-200 rounded-full border-solid border-[1px] w-fit'>SKILLS</h2>  */}
    </div>

    <div className='w-3/4 '>
    <h2>2+ YEARS OF EXPERIENCE</h2>
    <h2>16+ PROJECTS DONE</h2>
    
    <div className='text-zinc-600 pt-[6rem]'>

<div className='flex'>
<div className='w-1/3'>
    <h2>FRONT END :</h2>  
</div>

<div className='text-white w-2/3'>
    <h2>HTML, CSS, JAVASCRIPT, REACT, REDUX, REACT-QUERY, TAILWIND, GSAP, LOCOMOTIVE, AUTH, NEXT, STYLED-COMPONENTS</h2> 
</div>
</div>

<div className='flex'>
<div className='w-1/3'>
    <h2>BACK END :</h2>  
</div>

<div className='text-white w-2/3'>
    <h2>HTML, CSS, JAVASCRIPT, REACT, REDUX, REACT-QUERY, TAILWIND, GSAP, LOCOMOTIVE, AUTH, NEXT, STYLED-COMPONENTS</h2> 
</div>
</div>




    </div>
  
    </div>

    </div>

    </div>


    
    </div>
  </div>
  )
}

export default MyDetailsPhone