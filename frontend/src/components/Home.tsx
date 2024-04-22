import {  motion } from "framer-motion";
import { HomeIcon, Menu, Phone, ShoppingBagIcon, User2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import withSplashScreen from "./withSplashScreen"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import img1 from "../assets/photo4-modified.jpeg"
import { TypeAnimation } from "react-type-animation";
import { IconBrandGithub,IconMail,IconBrandLinkedin ,IconArrowBadgeRight} from "@tabler/icons-react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { useState } from "react";


const Home = () => {
  const navigate=useNavigate();
  const [showDiv,setShowDiv]=useState(false);
  return (
    <BackgroundGradientAnimation>
    <div className=" w-lvw h-screen flex flex-row justify-evenly items-center sm:px-12 px-4 gap-x-10">
      <div className=" lg:w-3/5 md:w-screen h-screen flex flex-col pt-40 pb-20 pr-10">
        <div className="sm:w-full w-lvw h-2/5 flex flex-col space-y-6 justify-center">
          <h1 className="text-2xl text-yellow-500 font-mono">Web-App Expert</h1>  
          <h1 className="text-3xl text-zinc-300 font-sans">Hi There, I am Shivam Jaiswal</h1>  
          <TypeAnimation className="text-zinc-100 font-serif text-6xl flex item-center space-y-10"
            sequence={[
              'I am a full-stack Developer',1000, 
              'I am specialized in developing Web-Apps',1000,
              'I am also an Open-source Contributor.',1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'flex' , inlineSize:'fit-content', paddingBottom:'10px' }}
            repeat={Infinity}
          />
        </div>
        <div className="h-1/5"></div>
        <div className="flex flex-col justify-start sm:pl-0 pl-12">
          <div className="w-full max-w-screen h-2/5 flex flex-row space-x-4 items-center z-30 sm:justify-start sm:mb-0 mb-10">
            <a href="https://github.com/TheJayas"><IconBrandGithub size={50} color="white" className="hover:animate-bounce"/></a>
            <a href="https://www.linkedin.com/in/shivam-jaiswal-54088a266/"><IconBrandLinkedin size={50} color="white" className="hover:animate-bounce"/></a>
            <a href="mailto:shivam181106@gmail.com"><IconMail size={50} color="white" className="hover:animate-bounce"/></a>
            <a href="/contact" className="flex-row items-center justify-center hover:animate-none sm:flex hidden ">
            <TextGenerateEffect words="Contact Me"/>
            <IconArrowBadgeRight size={50} color="white" className="hover:animate-bounce"/>
            </a>
          </div>
          <a href="/contact" className="flex-row items-center justify-start hover:animate-none sm:hidden flex ">
            <TextGenerateEffect words="Contact Me"/>
            <IconArrowBadgeRight size={50} color="white" className="hover:animate-bounce"/>
          </a>
        </div>
      </div>
    <img className="w-80 h-80 mt-12 rounded-2xl hidden lg:flex" src={img1}/>
    </div>
    <motion.div
        initial={{rotateZ:0}}
        animate={{rotateZ:showDiv ? 90 : 0}}
        transition={{duration:0.1}}
      className='h-10 w-10 bg-sky-400 flex flex-row fixed top-6 left-3 items-center justify-center rounded z-20 md:hidden'>
      <Menu className='bg-[#ededf4] p-[2px] border-zinc-900 rounded h-7 w-7 cursor-pointer z-10' onClick={()=>{setShowDiv(!showDiv)}}/>
      </motion.div>
      <motion.div className='w-10 rounded-b md:hidden z-10 top-[50px] left-3 fixed flex flex-col bg-sky-400 pt-2 items-center justify-evenly' 
      initial={{ height: 0 }}
      animate={{ height: showDiv ? screen.height*2/6 : 0}}
      transition={{ duration: 0.1}}
      >
        <HomeIcon className=' cursor-pointer hover:bg-emerald-400 rounded p-1 bg-emerald-300 h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/')}}/>
        <ShoppingBagIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/projects')}}/>
        <User2 className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/about')}}/>
        <Phone className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/contact')}}/>
      </motion.div>
    </BackgroundGradientAnimation>
  )
}

export default withSplashScreen(Home);
