import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TiArrowUp } from "react-icons/ti";
import SocialDots from "../ui/SocialDots";
import React, { useEffect, useRef } from 'react'
import { h2 } from "framer-motion/m";
import profileImg from "/ghost.jpg"

const text="MERN NATRIX"
function Hero({handlePage, handleProjects, handleContact, handleExperience}) {
    
    const textRef = useRef([]);
    // console.log(textRef);
    
    useGSAP(() => {
      const characters = textRef.current;
  
      // GSAP animation for each character
      const animate = gsap.from(
        characters,{delay:1 ,opacity:0, y:"random(100%,-100%,10)", duration:1, stagger: 0.1}
      );
    },[]);

//   const handleTextSplit = (text)=> {
//       return text.split("").map((letter,i)=>(
//         <span className="text-white" key={i} ref={(el) => headerText.current[i] = el}>
//         {letter}
//         </span>
//     ))
//   }
  return (
    <header className="p-5 md:px-[40px]">
    <SocialDots/>
    <div>
    <div className="intro-text font-normal md:text-end text-[.8rem] md:flex md:flex-col md:items-end md:gap-4">
        <p 
        className="w-fit md:w-[360px] text-[12px] md:text-[14px]">
I am a dedicated MERN stack developer with expertise in frontend development, a growing passion for backend systems, and a creative edge in UI/UX design. I aim to build intuitive, user-friendly, and efficient web solutions that seamlessly blend functionality and design.
        </p>
        <img src={profileImg} className="md:w-[335px] h-[18rem] md:h-[200px] object-cover object-center" alt="profile-pic" />
    </div>
    
    
    <div className="md:mt-[-140px]">
        <h1 className="heading-text text-[22vw] leading-[80px] mb-[25px] mt-[10px] font-gallient md:text-[14.5vw] md:leading-[300px]">
        {text.split("").map((char, index) => ( char === " " ? <br key={index}/> : <span key={index} ref={(el) => {textRef.current[index] = el}}  className="inline-block" >{char}</span>))}
        </h1>
    </div>
    
    <div className="status-text md:flex gap-[15px]">
    
    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">SPECIALTY : </h2>
        <h2 className="hover-target font-normal">MERNSTACK</h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">AVAILABILITY : </h2>
        <h2 className="hover-target font-normal">OPEN FOR WORK</h2>
    </div>
    </div>
    
    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">EXPERIENCE : </h2>
        <h2 className="font-normal">2+ YEARS</h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">BASED IN : </h2>
        <h2 className="font-normal">PAKISTAN</h2>
    </div>
    </div>
    
    </div>
    </div>
    
    <nav>
    <div className="pt-[40px] md:pt-0 status-text md:flex gap-[15px]">
    
    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
    <hr className="h-[2px] text-white md:pb-4"/>
    <h2 onClick={handleExperience} className="font-normal flex justify-between cursor-pointer">HOME <TiArrowUp size="2rem" className="rotate-45"/></h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
    <hr className="h-[2px] text-white md:pb-4"/>
    <h2 onClick={handleProjects} className="font-normal flex justify-between cursor-pointer">WORKS <TiArrowUp size="2rem" className="rotate-45"/></h2>
    </div>
    </div>
    
    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
    <hr className="h-[2px] text-white md:pb-4"/>
    <h2 onClick={handlePage} className="font-normal flex justify-between cursor-pointer">ABOUT <TiArrowUp size="2rem" className="rotate-45"/></h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
        <hr className="h-[2px] text-white md:pb-4"/>
        <h2 onClick={handleContact} className="font-normal flex justify-between cursor-pointer">CONTACT <TiArrowUp size="2rem" className="rotate-45"/></h2>
    </div>
    </div>
    
    </div>
    </nav>
    
    </header>
)
}

export default Hero;