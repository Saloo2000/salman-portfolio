import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiArrowUp } from "react-icons/ti";
import About from "./About";
import SocialDots from "../ui/SocialDots";
import Projects from "./Projects";
import Hero from "./Hero";
import WorkSpace from "./Workspace";
import Contact from "./Contact";
import { useRef } from "react";


gsap.registerPlugin(useGSAP,ScrollTrigger);
function Home() {
    const projects = useRef()
    const about = useRef()
    const experience = useRef()
    const contact = useRef()

    function handlePage() {
        about.current.scrollIntoView({behavior: "smooth"})
    }
    function handleProjects() {
        projects.current.scrollIntoView({behavior: "smooth"})
    }
    function handleContact() {
        contact.current.scrollIntoView({behavior: "smooth"})
    }
    function handleExperience() {
        experience.current.scrollIntoView({behavior: "smooth"})
    }

    

return(
<div className="bg-black text-white font-funnel font-normal">
<Hero handlePage={handlePage} handleProjects={handleProjects} handleContact={handleContact} handleExperience={handleExperience}/>
<Projects project={projects}/>
<About about={about}/>
<WorkSpace experience={experience}/>
<Contact contact={contact}/>
</div>
)
};

export default Home;