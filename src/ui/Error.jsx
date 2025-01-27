import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="px-[1rem] font-['tungsten'] text-4xl">
        <h1 className="text-6xl py-[6px] font-bold">404</h1>
        <p>Page Not Found.</p>
        <p>Mortals Are Not Are Allowed Here.</p>
        <Link to='/' className="bg-black text-white text-[24px] px-[14px] py-[8px]">Try Again</Link>
    </div>
  )
}

export default Error