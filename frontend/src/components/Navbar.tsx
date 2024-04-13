// import React from 'react'

// import Home from "./Home"

const Navbar = () => {
  return (
    <div className="h-14 border-gray-200 border-2 justify-center flex flex-col rounded-full fixed mt-8 z-10" style={{width:'800px',left:'50%', marginLeft:'-400px'}}>
      <div className="flex flex-row justify-around divide-x-2 divide-slate-200">
        <div className="mx-2 w-1/4 flex flex-row justify-center"><a href="/"><h1 className="font-mono hover:animate-pulse">HOME</h1></a></div>
        <div className="mx-2 w-1/4 flex flex-row justify-center"><a href="/about"><h1 className="font-mono hover:animate-pulse">ABOUT ME</h1></a></div>
        <div className="mx-2 w-1/4 flex flex-row justify-center"><a href="/projects"><h1 className="font-mono hover:animate-pulse">PROJECTS</h1></a></div>
        <div className="mx-2 w-1/4 flex flex-row justify-center"><a href="/contact"><h1 className="font-mono hover:animate-pulse">CONTACT ME</h1></a></div>
      </div>
    </div>   
  )
}

export default Navbar
