import { IoSync } from "react-icons/io5"
import AnimatedHeading from "./AnimatedHeading"

function Header() {
    const year=new Date().getFullYear()
    const month=new Date().getMonth()
    const day=new Date().getDate()

  return (
    <header className="h-[100vh] font-['funnel sans'] text-white">
      <nav className=" md:flex justify-between">
      
      <div></div>
      
      </nav>
    </header>
  )
}

export default Header;