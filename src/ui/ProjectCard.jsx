import React from 'react'
import img from "../../public/skull.jpg"
import { TiArrowUp } from 'react-icons/ti'
function ProjectCard({data,row}) {
  return (
    <div ref={row} className='p-5 bg-black md:w-[300px] absolute md:top-[0px] hidden transition-opacity duration-500 md:left-[-350px] pointer-events-none top-0 z-50 left-0'>
        <img src={data.imagePath} alt="project-img" className='rounded-[20px] object-cover object-center w-full h-[280px]' />
        <div className="details">
            <h2 className='pt-[8px] font-bold text-[18px]'>{data.name}</h2>
            <div className="tech py-[4px] flex gap-2 text-[12px] flex-wrap">
              {data?.technology?.map(tech=><p className='bg-zinc-700 px-[6px] py-[3px]'>{tech}</p>)}
            </div>
            <p className='pt-[14px] text-[14px]'>{data.description}</p>

<div className='flex justify-end pt-[12px]'>
                      <button
                      className="bg-white rounded-[12px] flex items-center justify-center text-black text-[14px] w-full md:w-fit px-3 py-1 font-medium self-end"
                        
                      // onClick={handleParams}
                      >
                      Visit Now <TiArrowUp size="2rem" className="rotate-45" />
                      </button>
</div>
        </div>
    </div>
  )
}

export default ProjectCard