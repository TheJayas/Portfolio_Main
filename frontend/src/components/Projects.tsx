import {useState} from "react";
import {  motion } from "framer-motion";
import { HomeIcon, Menu, Phone, ShoppingBagIcon, User2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "./ui/background-beams";
import { HeroParallax } from "./ui/hero-parallax";
import { TypewriterEffectSmooth } from "./ui/typewriter";

export const Projects = () => {
  const words = [
    {
      text: "Welcome ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "to ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "My ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500 text-4xl",
    },
    {
      text: "Section.",
      className: "text-blue-500 dark:text-blue-500 text-4xl",
    },
  ];
  const navigate=useNavigate();
  const [showDiv,setShowDiv]=useState(false);
  return (
    <div className="h-[190rem] bg-black flex flex-col w-full overflow-x-hidden">
      <div className="h-40 w-screen item-center justify-center flex flex-row overflow-x-hidden">
        <TypewriterEffectSmooth words={words} className='items-center bg-black'/>
      </div>
      <div>
        <HeroParallax products={projects}/>
      </div>
      <motion.div
        initial={{rotateZ:0}}
        animate={{rotateZ:showDiv ? 90 : 0}}
        transition={{duration:0.1}}
      className='h-10 w-10 bg-sky-400 flex flex-row fixed top-6 left-3 items-center justify-center rounded z-20'>
      <Menu className='bg-[#ededf4] p-[2px] border-zinc-900 rounded h-7 w-7 cursor-pointer z-10' onClick={()=>{setShowDiv(!showDiv)}}/>
      </motion.div>
      <motion.div className='w-10 rounded-b z-10 top-[50px] left-3 fixed flex flex-col bg-sky-400 pt-2 items-center justify-evenly' 
      initial={{ height: 0 }}
      animate={{ height: showDiv ? screen.height*2/6 : 0}}
      transition={{ duration: 0.1}}
      >
        <HomeIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/')}}/>
        <ShoppingBagIcon className=' cursor-pointer hover:bg-emerald-400 rounded p-1 bg-emerald-300 h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/projects')}}/>
        <User2 className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/about')}}/>
        <Phone className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/contact')}}/>
      </motion.div>
      <BackgroundBeams className="h-[190rem] -z-10"/>
    </div>
  )
}


export const projects = [
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
];