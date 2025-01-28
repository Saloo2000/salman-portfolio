import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { TbBackground } from 'react-icons/tb';
import img1 from "/bg-1.jpg"
import img2 from "/bg-2.jpg"
import img3 from "/bg-gra.jpg"
import img4 from "/bg-skull.jpg"
import img5 from "/men-2.jpg"
import img6 from "/men-1.jpg"
import img7 from "/skull.jpg"
import img8 from "/bg-galaxy.jpg"
import img9 from "../../public/bg.jpg"
import ProjectCard from '../ui/ProjectCard';


const images = [img1, img2, img3, img4, img5, img6];
const data = [
{
  name:"The Wild Oasis (Dashboard)",
  technology:["REACTQUERY", "REACT", "SUPABASE", "STYLED COMPONENT"],
  imagePath:img1,
  description:"The Wild Oasis Admin Panel manages orders and bookings for luxury mountain cabins, ensuring a seamless experience. ",
  projectURL:"http://"
},
{
  name:"The Wild Oasis",
  technology:["NEXT", "REACT", "SUPABASE", "AUTH"],
  imagePath:img2,
  description:"The Wild Oasis offers luxury mountain cabins for a serene and upscale getaway.",
  projectURL:"http://"
},
{
  name:"The Portfolio",
  technology:["REACT", "GSAP"],
  imagePath:img3,
  description:"I created a 3D portfolio to showcase my skills in modeling, texturing, and rendering through interactive visuals.",
  projectURL:"http://"
},
{
  name:"The Ochi (Clone)",
  technology:["REACT", "LOCOMOTIVE", "GSAP"],
  imagePath:img5,
  description:"I created a clone of the Ochi website, replicating its design and functionality.",
  projectURL:"http://"
},
{
  name:"The MovieX",
  technology:["REACT", "REDUX"],
  imagePath:img6,
  description:"Movix is an online platform for streaming and discovering movies, offering a user-friendly interface and a vast collection of films to enjoy.",
  projectURL:"http://"
},
{
  name:"The Pezza",
  technology:["UI UX", "ADOBE XD"],
  imagePath:img4,
  description:"UI/UX for the Pezza web app, focusing on creating an intuitive and visually appealing user experience.",
  projectURL:"http://"
},
{
  name:"The SunSpa",
  technology:["UI UX", "ADOBE XD"],
  imagePath:img7,
  description:"I created a wireframe for an online booking system, visualizing the layout and user flow for salon owners to streamline appointment scheduling.",
  projectURL:"http://"
},
{
  name:"Galaxy Stock",
  technology:["UI UX", "ADOBE XD"],
  imagePath:img8,
  description:"I designed the homepage for Galaxy Stock, an eco-friendly shoe shop, focusing on a clean, sustainable design that highlights their products and values.",
  projectURL:"http://"
}
]

function Projects({project}) {
const [imageIndex, setImageIndex] = useState(0)
  const row= useRef()

  // useGSAP(()=>{
  //   const t=gsap.timeline()
  //   t.to(row.current,{delay:5, x:100,})
  //   t.to(row.current,{y:100,})
  // })

  function handleMouse(e) {
    console.log(e.target.id);

    if (e.target.id === "1") setImageIndex(0)
    if (e.target.id === "2") setImageIndex(1)
    if (e.target.id === "3") setImageIndex(2)
    if (e.target.id === "4") setImageIndex(3)
    if (e.target.id === "5") setImageIndex(4)
    if (e.target.id === "6") setImageIndex(5)
    if (e.target.id === "7") setImageIndex(6)
    if (e.target.id === "8") setImageIndex(7)
    
    const {clientX:x, clientY:y} = e
    
    // const page={x:e.screenX, y:e.screenY}
    gsap.to(row.current,{x:x, y:y })
  }

  function handleImgLeave( onMouseEnter={handleImgEnter}) {
    row.current.classList.add("hidden")
  }

  function handleImgEnter() {
    row.current.classList.remove("hidden")
  }


  return (
    <div ref={project} data-scroll data-scroll-speed="0.15" className='pt-[8rem] rounded-t-[35px] p-[2rem]  md:px-[40px] pb-[400px] bg-[#161616] md:rounded-t-[70px]'>
    <div className='relative z-50'>
    <ProjectCard row={row} data={data[imageIndex]}/>
    </div>
      {/* <img ref={row} src={images[imageIndex]} className="curser-img bg-red-700 h-[400px] w-[300px] mt-[150px] ml-[-250px] absolute hidden pointer-events-none top-0 z-[99999999] left-0"/> */}
      <div className="headings md:pt-[150px]">
       
       <div data-scroll data-scroll-speed="0.25" className='md:flex md:justify-between items-start bg-o'> 
       <h2 className='font-gallient md:text-[7vw] text-[18vw]'>Let's Start</h2>
       <hr  className='h-[1px] bg-white md:w-[55%]'/>
       <h2 className='font-gallient md:text-[4.3vw] text-[8vw]'>Projects</h2>

       </div>
       <p data-scroll data-scroll-speed="0.10" className='w-full  text-center text-[12px] md:text-start mb-[-140px] md:w-[30%] md:text-[14px] font-normal'>
       These projects highlight my journey as a Web developer, showcasing my ability to build modern web applications from start to finish. They include creating intuitive, responsive user interfaces with React, developing efficient server-side logic with Node.js and Express, and managing data effectively.</p>
       </div>

    <div className="projects-row md:px-[0rem] mt-[12rem]">
      
      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='1' className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://saloo2000.github.io/wild-oasis-admin-dashboard/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className='md:flex-[1.5] md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>The Wils Oasis (Dashboard Panel)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>Luxury Cabin Booking Web App.</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><a href='https://saloo2000.github.io/wild-oasis-admin-dashboard/' className='md:w-2/8' target="_blank" >Visit Now</a></div>

      {/* <h2 className='font-bold md:w-2/8'>The Wils Oasis (Dashboard Panel)</h2>
      <h2 className='md:w-2/8'>Luxury Cabin Booking Web App.</h2>
      <h2 className='md:w-2/8'><GoArrowRight size="26px"/></h2>
      <a href='https://saloo2000.github.io/wild-oasis-admin-dashboard/' className='md:w-2/8' target="_blank" >Visit Now</a> */}
      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='2'   className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://the-wild-oasis-user-interface-git-main-saloo2000s-projects.vercel.app/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>
      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>The Wils Oasis (UserSide Interfaces)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>Luxury Cabin Booking Web App.</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>
      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='3'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://saloo2000.github.io/azhar-portfolio/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>The 3D Artist Portfolio</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>UIUX + Developed by Me</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='4'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://saloo2000.github.io/ochi/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>Ochi (Clone)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>The Digital Marketing Agency.</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='5'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://saloo2000.github.io/movieX/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>MovieX</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>Watch Free Movies High Resolution 4K.</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='6'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://xd.adobe.com/view/b24656e6-910c-4ae2-ab76-82d0d9e4c321-e715/grid' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>The Pezza Web App (UI-UX)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>The Online Pizza Order Webb App Best In Town.</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='7'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://drive.google.com/file/d/1QpSFuBihj7scRQwDJuYEElpgpQ5f16Qb/view?usp=drive_link' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>SunSpa (Wireframes)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>The Online Booking System Wireframes (Dashboard Screens)</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>

      <div onMouseMove={handleMouse} onMouseLeave={handleImgLeave} onMouseEnter={handleImgEnter} id='8'  className="row w-full text-center border-t-[1px] py-[10px]">
      <a href='https://xd.adobe.com/view/91d2afb7-1cbd-4bc8-aeff-a7799a505a5a-c481/' target="_blank"  className='flex flex-col md:flex-row gap-4 justify-between md:px-[2rem] md:py-[15px] hover:bg-zinc-800'>

      <div className=' md:flex-[1.5] md:flex-shrink-0 overflow-hidden md:text-start '><h2 className='font-bold md:w-2/8'>Galaxy Stock</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-start '><h2 className='md:w-2/8'>Ecommerce Webbsite (Only Homepage) Design Idea</h2></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-center '><GoArrowRight className='ml-[45%] rotate-90 md:rotate-0 md:ml-[50%]' size="26px"/></div>
      <div className=' md:flex-1 md:flex-shrink-0 md:overflow-hidden md:text-end '><h2 target="_blank" >Visit Now</h2></div>

      </a>
      </div>


    </div>
    </div>
  )
}
 
export default Projects;