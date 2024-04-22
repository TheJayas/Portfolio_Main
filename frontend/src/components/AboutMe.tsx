import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Icon3dCubeSphere,  IconBrandDjango,  IconBrandFirebase,  IconBrandFlutter,  IconBrandMongodb,  IconBrandMysql,  IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandVercel,  IconPlayerTrackNextFilled } from '@tabler/icons-react';
import { TracingBeam } from './ui/tracing-beam';
import { twMerge } from 'tailwind-merge';
import { TypewriterEffectSmooth } from './ui/typewriter';
import { HomeIcon, Menu, Phone, ShoppingBagIcon, User2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { AuroraBackground } from "./ui/aurora-background";
// import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const AboutMe = () => {
  const navigate=useNavigate();
  const [showDiv,setShowDiv]=useState(false);
  const [col1,setCol1]=useState('yellow');
  const [col2,setCol2]=useState('yellow');
  const [col3,setCol3]=useState('yellow');
  useEffect(() => {
    const handleScroll = () => {
      const div1 = document.getElementById('div1');
      const div2 = document.getElementById('div2');
      const div3 = document.getElementById('div3');
      if (div1) {
        const { top } = div1.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol1('teal');
        } else {
          setCol1('yellow');
        }
      }
      if (div2) {
        const { top } = div2.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol2('teal');
        } else {
          setCol2('yellow');
        }
      }
      if (div3) {
        const { top } = div3.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol3('teal');
        } else {
          setCol3('yellow');
        }
      }
    };
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDiv(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const words = [
    {
      text: "Hi ",
    },
    {
      text: "There,",
    },
    {
      text: "I am ",
    },
    {
      text: "Shivam",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Jaiswal.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='overflow-x-hidden'>
      <motion.div
        initial={{rotateZ:0}}
        animate={{rotateZ:showDiv ? 90 : 0}}
        transition={{duration:0.1}}
      className='h-10 w-10 bg-sky-400 flex flex-row fixed top-6 left-3 items-center justify-center rounded z-20'>
        <Menu className='bg-[#ededf4] p-[2px] border-zinc-900 rounded h-7 w-7 cursor-pointer z-10' onClick={()=>{setShowDiv(!showDiv)}}/>
      </motion.div>
     <div className='bg-black h-full w-full flex flex-col items-center justify-center overflow-y-hidden'>
        <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-12 text-2xl font-bold text-white md:pt-12 md:text-5xl items-start">
            About Me
        </h1>
        <TracingBeam className="px-6 my-10 h-full pt-10">
          <TypewriterEffectSmooth words={words} className='pl-10'/>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 text-xl text-black dark:text-white pl-10 font-semibold flex flex-row items-center space-x-4">
            <Icon3dCubeSphere color={col1}/>
           <div id='div1' className={col1 === 'yellow' ? "text-yellow-600" : "text-green-600"}> I am currently 
           pursuing my B.Tech degree in Computer Science at IIT Mandi.</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-2 text-xl text-black dark:text-white pl-10 font-semibold flex flex-row items-center space-x-4">
          <Icon3dCubeSphere color={col2}/>
          <div id='div2' className={col2 === 'yellow' ? "text-yellow-600" : "text-green-600"}> Learning and gaining skills in development through academic pursuits.</div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
           className="mt-2 text-xl text-black dark:text-white pl-10 font-semibold flex flex-row items-center space-x-4">
          <Icon3dCubeSphere color={col3}/>
          <div id='div3' className={col3 === 'yellow' ? "text-yellow-600" : "text-green-600"}>Doing competitive programming to enhance my problem-solving abilities </div>
          </motion.div>
          <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold text-white md:text-4xl pl-10">
              Skills
          </h1>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
         <Card title="Next Js" icon={<IconBrandNextjs color='white' size={50} />}>
           <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>
        <Card title="React Js" icon={<IconBrandReact color='white' size={50} />}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-900"
            colors={[[226, 173, 242]]}
            />
        </Card>
        <Card title="MERN" icon={<IconBrandNodejs color='white' size={50}  />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
      <Card title="Django" icon={<IconBrandDjango color='white' size={50} />}>
           <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>
        <Card title="Flutter" icon={<IconBrandFlutter color='white' size={50} />}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-900"
            colors={[[226, 173, 242]]}
            />
        </Card>
        <Card title="Firebase" icon={<IconBrandFirebase color='white' size={50}  />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>
        </div>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
      <Card title="MySQL" icon={<IconBrandMysql color='white' size={50} />}>
           <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>
        <Card title="Vercel" icon={<IconBrandVercel color='white' size={50} />}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-900"
            colors={[[226, 173, 242]]}
            />
        </Card>
        <Card title="MongoDB" icon={<IconBrandMongodb color='white' size={50}  />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>
        </div>
        <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-2 text-3xl font-bold text-sky-300 md:text-4xl pl-16">
            Projects
        </h1>
        <div className="mx-auto max-w-2xl py-40 text-white antialiased pt-2 sm:pl-8 md:pl-2 pl-10">
        {Project_list.map((project, i) => (
          <div key={`content-${i}`} className="mb-10 mt-4 md:mt-0">
            <div className="flex flex-row space-x-4 items-start">
            <IconPlayerTrackNextFilled className="h-8 w-8 text-yellow-600 dark:text-yellow-600 mt-1" />
          <h2 className={twMerge('text-3xl text-black dark:text-yellow-200 font-semibold pb-4')}>{project.title}</h2>
          </div>
          <div className="prose prose-sm dark:prose-invert mt-2 text-xl text-black dark:text-white">{project.description}</div>
          </div>
        ))}
        </div>
      </TracingBeam>
      </div>
    <motion.div className='w-10 rounded-b z-10 top-[50px] left-3 fixed flex flex-col bg-sky-400 pt-2 items-center justify-evenly' 
    initial={{ height: 0 }}
    animate={{ height: showDiv ? screen.height*2/6 : 0}}
    transition={{ duration: 0.1}}
    >
      <HomeIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/')}}/>
      <ShoppingBagIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/projects')}}/>
      <User2 className=' cursor-pointer hover:bg-emerald-400 rounded p-1 bg-emerald-300 h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/about')}}/>
      <Phone className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/contact')}}/>
    </motion.div>
    </div>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <AuroraBackground className="w-fit h-fit p-0 m-0">
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-[16rem] mx-auto p-4 relative h-[20rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className=" text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
    </AuroraBackground>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default AboutMe



const Project_list = [
  {
      title: 'Code Sync Hub',
      description: (
          <ul className="list-disc">
              <li>Developing a full-stack applications using MERN.</li>
              <li>
                  Implemented essential to provide users an environment for writing and testing code in real-time, in different programming languages.
              </li>
          </ul>
      ),
      
  },
  {
    title: 'Journey Aura',
    description: (
        <ul className="list-disc">
            <li>Developing a full-stack applications using MERN.</li>
            <li>
                Developing a full-stack applications that allows users to book train tickets for their journey, and along with that, there will be a feature to make payments for the tickets.
            </li>
        </ul>
    ),
  },
  {
    title: 'Note Corner',
    description: (
        <ul className="list-disc">
            <li>Developed a full-stack applications using NextJs.</li>
            <li>
              This project is a comprehensive productivity web application designed to streamline various tasks and enhance user efficiency. Combining an array of features within a single platform, our web app serves as a versatile toolkit for users seeking a consolidated solution for productivity management.
            </li>
        </ul>
    ),
  },
  {
    title: 'Club Catalyst',
    description: (
        <ul className="list-disc">
            <li>Developed a full-stack applications using MERN.</li>
            <li>
            This platform is designed to streamline the approval process for events and purchases within the student gymkhana office. It facilitates a structured workflow for approval automation, request generation, and data management.
            </li>
        </ul>
    ),
  },
];