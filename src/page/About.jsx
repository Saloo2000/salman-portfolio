import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MyDetails from "../ui/MyDetails";
import DottedLine from "../ui/DottedLine";
import Profile from "../ui/Profile";
import SmallDetails from "../ui/SmallDetails";

gsap.registerPlugin(ScrollTrigger);

function About({about}) {
  const [smallScreen, setSmallScreen] = useState()

  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => window.removeEventListener("resize", handleScreen);
  }, []);

  function handleScreen() {
    if(window.innerWidth <= 800){
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }
  return (
    <div ref={about} data-scroll data-scroll-speed="-0.4" className={`p-[2rem] md:rounded-t-[70px] rounded-t-[35px] relative z-[1] bg-black pb-[150px]`}>
      <div className="headings md:pt-[150px]">

       <div className='md:flex md:justify-between items-start'> 
       <h2 className='font-gallient md:text-[7vw] text-[18vw]'>About Me</h2>
       <hr  className='h-[1px] bg-white md:w-[55%]'/>
       <h2 className='font-gallient md:text-[4.3vw] text-[8.5vw]'>(02)</h2>

       </div>
       </div>

   {smallScreen ? <SmallDetails/> : <MyDetails/>}
      <Profile smallScreen={smallScreen}/>

    </div>
  );
}

export default About;