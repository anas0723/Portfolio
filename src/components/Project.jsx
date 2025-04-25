import React from 'react'

export default function Project() {
  return (
    <><div className=" container mx-auto flex flex-col items-center justify-center min-h-screen text-white px-4 lg:px-24 ">
    <h1 className='text-6xl font-mono hover:border-2  flex  items-center justify-center  hover:shadow-[#64ffda] shadow-lg  text-[#64ffda]  font-mono sm:text-3xl px-6 py-3 rounded-lg border-2  transition-all duration-300 cursor-pointer '>Project</h1>
    <p className='text-xl mt-8  text-gray-300' >All My project are here. Same project has private repos will that why their is only Hosted link if anyone want to see repos well be provided.
    </p>
    <div className="flex flex-none justify-evenly mt-10  gap-4">
    <div className=" flex justify-evenly mt-10 flex-wrap gap-4">  
    <div className="w-[500px] h-72 border-4 border-amber-500"></div>

    <div className="w-[500px] h-72 border-4 border-amber-500 "></div> 
    </div> 
    <div className=" flex justify-evenly mt-10 flex-wrap gap-4">  
    <div className="w-[500px] h-72 border-4 border-amber-500"></div>

    <div className="w-[500px] h-72 border-4 border-amber-500 "></div> 
    </div>
    </div> 
    </div>
    </>
  )
}
