import { useState } from "react";
import { TiArrowUp } from "react-icons/ti";
import color from "/color.jpg" 

const text=["As a passionate frontend developer, I specialize in crafting seamless and visually appealing user interfaces that enhance the overall web experience. My expertise lies in leveraging modern technologies like React and Redux to build dynamic, responsive, and scalable applications. I have a strong focus on creating smooth animations and engaging interactions using tools like GSAP, ensuring that every design feels intuitive and immersive. With a commitment to writing clean, maintainable code and a solid grasp of HTML, CSS, and JavaScript, I prioritize performance optimization and cross-browser compatibility. Additionally, I collaborate effectively through GitHub, ensuring efficient version control and teamwork. My goal is to transform complex ideas into user-friendly interfaces that blend functionality with design, delivering exceptional digital experiences.","As a mid-level backend developer specializing in MERN stack technology, I focus on creating robust, secure, and scalable server-side architectures. I have hands-on experience with Node.js and Express.js, building efficient RESTful APIs that enable seamless communication between the frontend and backend. My expertise extends to MongoDB, where I design well-structured databases, optimize queries, and manage data efficiently to ensure high performance.I am proficient in implementing user authentication and authorization systems, including JWT and role-based access control, to maintain application security. Additionally, I handle error handling, logging, and debugging to ensure reliable and maintainable codebases. I actively use tools like Postman for API testing and GitHub for version control and team collaboration. My goal is to deliver backend solutions that provide the foundation for smooth and intuitive user experiences, ensuring every application is both functional and future-ready.","As a Junior UI/UX designer, I am driven by the goal of crafting designs that are both user-focused and aesthetically impactful. I excel in translating ideas into intuitive interfaces through wireframing, prototyping, and interaction design. Leveraging tools like Figma and Adobe XD, I create seamless workflows and prototypes that prioritize both usability and business objectives.With a solid foundation in design principles, user research, and accessibility best practices, I ensure that every design decision enhances user satisfaction and engagement. By incorporating feedback and iterative testing, I refine designs to deliver experiences that are not only visually appealing but also meaningful and functional. My ultimate aim is to design solutions that leave a lasting impression while solving real-world problems."]

function Workspace({experience}) {
   const [ count, setCount ] = useState(0)

   function handleCount(e) {
    console.log(e.target);
    
    setCount(count=> count >= 2 ? count=0 : count + 1)
   }

  return (
<div ref={experience} className="bg-[#161616] p-[2rem]  md:px-[40px] pt-[4rem] text-white md:pt-[40px] pb-[32rem] md:pb-[42rem] relative z-50 rounded-t-[35px]  md:rounded-t-[70px]">

<div className="headings md:pt-[150px] md:pb-[100px]">
<div className='md:flex md:justify-between items-start'>
  
<h2 className='font-gallient md:text-[4.3vw] text-[8vw]'>(03)</h2>
<hr  className='h-[1px] bg-white md:w-[50%]'/>
<h2 className='font-gallient md:text-[7vw] text-[18vw]'>Experience</h2>

</div>
</div>

<div className="work-content flex flex-col-reverse md:flex-row justify-center items-center md:gap-[80px]">

<div className="work-text md:w-2/5">
<div className="work-heading flex font-gallient gap-6 items-center h-[100px]">
<h2 className={`transition-all duration-500 ${count === 0 ? "text-[8vw] md:text-[3.5vw]" : "md:text-[1.7vw] opacity-25"}`}>Frontend</h2>
    <h2 className={`transition-all duration-500 ${count === 1 ? "text-[8vw] md:text-[3.5vw]" : "md:text-[1.7vw] opacity-25"}`}>Backend</h2>
    <h2 className={`transition-all duration-500 ${count === 2 ? "text-[8vw] md:text-[3.5vw]" : "md:text-[1.7vw] opacity-25"}`}>Ui Ux Design</h2>
  </div>
  <div className="md:py-[20px] w-full text-center md:text-start">
    <p className="md:py-5 transition-all duration-1000 md:text-[18px]">{text[count]}</p>

       {/* <p className="md:py-5 transition duration-1000">As a front-end connoisseur with a passion for React/Redux development,
       I have accumulated 2 years of hands-on experience in crafting modern web
       and web app solutions. My focus is on creating engaging user experiences
       that go beyond just interfaces. I excel as a collaborative team player,
       placing great emphasis on understanding project requirements thoroughly
       and delivering scalable, high-quality solutions.</p> */}
  </div>
  <div className="btns flex gap-6 pt-[2rem] md:py-[0px] md:justify-start justify-center">
  <div className="rounded-full border-[1px] border-white w-16 h-16 flex justify-center items-center hover:bg-white hover:text-black">
  <button onClick={()=> setCount(count=> count-1)} disabled={count === 0}><TiArrowUp size="3rem" className="-rotate-90 pointer-events-none"/></button>
  </div>
  
  <div className="rounded-full border-[1px] border-white w-16 h-16 flex justify-center items-center hover:bg-white hover:text-black">
  <button onClick={handleCount}><TiArrowUp size="3rem" className="rotate-90 pointer-events-none"/></button>
  </div>

</div>
</div>

<div className="work-img md:w-3/5">
<div className="img-container">
  <img src={color} className="w-full rounded-md h-[600px] object-center object-cover" alt="men" />
</div>
</div>

</div>

    </div>
  )
}

export default Workspace;