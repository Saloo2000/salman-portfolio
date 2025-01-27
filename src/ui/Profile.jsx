import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Profile({smallScreen}) {

    const textRef = useRef([]);
    // console.log(textRef);
    
    useGSAP(() => {
      const characters = textRef.current;
  
      // GSAP animation for each character
      const animate = gsap.fromTo(
        characters,
        { opacity: 0.2}, // Initial state: invisible and slightly below
        {
          opacity: 1,
          y: 0, // Final state: fully visible in place
          fontSize: window.innerWidth <= 320 ? "18px" : "2rem",
          duration: 2,
          stagger: .4, // Stagger animation for each letter
          scrollTrigger: {
            trigger: ".text-about", // Element to trigger animation
            start: smallScreen ? "10% 50%" : "120% 90%", // Start animation when top of element enters viewport
            end: smallScreen ? "90% 40%" : "80% 30%", // End when element reaches this point
            scrub: true, // Smooth animation tied to scroll
            // markers: true, //
          },
          onComplete:()=> animate.kill()
        }
      );
    },[]); 
  
    const text =  "As a front-end connoisseur with a passion for React/Redux development, I have accumulated 2 years of hands-on experience in crafting modern web and web app solutions. My focus is on creating engaging user experiences that go beyond just interfaces. I excel as a collaborative team player, placing great emphasis on understanding project requirements thoroughly and delivering scalable, high-quality solutions."; // Text to animate
  
    return (
          <div
            // data-scroll
            // data-scroll-speed=".20"
            className={` detail-sec md:flex py-[8rem]`}
          >
            <div className="w-1/3">
              <p className="saloo py-[18px] md:text-[2vw]">PROFILE</p>
            </div>
    
            {/* Text reveal animation */}
            <div className="w-full text-[20px] md:w-2/3 md:text-[1.8rem] relative font-['manrope']">
              <div className="text-about flex md:h-[200px] flex-wrap relative">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    ref={(el) => {textRef.current[index] = el}} // Store each character ref
                    className="inline-block opacity-0 " // Initial invisible state
                  >
                    {char === " " ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>
          </div>    
      );
}

export default Profile;
