import React from 'react'

function StatusBar() {
  return (
    <div className="status-text md:flex gap-[15px]">

    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">SPECIALTY : </h2>
        <h2 className="font-medium">MERNSTACK</h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">AVAILABILITY : </h2>
        <h2 className="font-medium">OPEN FOR WORK</h2>
    </div>
    </div>
    
    <div className="flex gap-6 justify-between w-full">
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">EXPERIENCE : </h2>
        <h2 className="font-medium">2+ YEARS</h2>
    </div>
    <div className="text-[14px] pb-4 w-2/4">
        <h2 className="font-normal text-zinc-600">BASED IN : </h2>
        <h2 className="font-medium">PAKISTAN</h2>
    </div>
    </div>
    
    </div>
  )
}

export default StatusBar