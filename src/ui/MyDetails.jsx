import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function  MyDetails() {

  const elementRef = useRef(null);
  const [positions, setPositions] = useState({x:0, y:0});

  useEffect(() => {

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setPositions({x: mouseX, y: mouseY}); // Update the positions state with the mouse coordinates
    };

    // Add the event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useGSAP(()=>{
    const element = elementRef.current;
          // Adjust the values to control the amount of movement
          const moveX = (positions.x - window.innerWidth / 2) * 0.05;
          const moveY = (positions.y - window.innerHeight / 2) * 0.05;
    
          // Use GSAP to animate the movement
          gsap.to(element, {
            x: moveX,
            y: moveY,
            ease: 'power2.out',
          });
  },[positions])

  return (
    <div ref={elementRef} className="person-info pt-[12rem] ">
      <div className="details flex flex-col md:flex-row text-[1.2rem]">
      <div className='w-1/5 text-zinc-600 font-manrope font-semibold'>
      <h2>NAME :</h2> 
      <h2>LOCATION :</h2> 
      <h2>PROFESSION :</h2> 
      </div>

      <div className='w-3/4'>

    <div>
      <h2>SALMAN SHAH</h2>
      <h2>MALIR 15 FLYOUR, KARACHI, SINDH, PAKISTAN</h2>
      <h2>FRONTEND (9/10) + BACKEND (7/10) = MERNSTACK</h2>
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
      <h2>HTML, CSS, JAVASCRIPT, REACT, REDUX, REACT-QUERY, TAILWIND, GSAP, LOCOMOTIVE, AUTH, NEXT, STYLED-COMPONENTS GIT, GITHUB</h2> 
      {/* <h2>Html Css Java Script Tailwind Bootstrap GSAP Locomotive Styled Components Auth js React Redux React Query Next js</h2>  */}
 </div>
</div>

<div className='flex mt-8'>
<div className='w-1/3'>
      <h2>BACK END :</h2>  
 </div>

 <div className='text-white w-2/3'>
      <h2>NODE JS, EXPRESS JS, MONGO DB, MONGOOSE, JASON WEB TOKEN, AUTH JS, POSTMAN, ADVANCE API FILTERING, AUTHORIZATION, AUTHENTICATION</h2> 
 </div>

 
</div>

<div className='flex mt-8'>
<div className='w-1/3'>
      <h2>UI UX DESIGNS :</h2>  
 </div>

 <div className='text-white w-2/3'>
      <h2>ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR, ADOBE XD, ETC</h2> 
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

export default MyDetails;