import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Icon3dCubeSphere,  IconBrandNextjs, IconBrandReact } from '@tabler/icons-react';
import { TracingBeam } from './ui/tracing-beam';
import { twMerge } from 'tailwind-merge';
import { TypewriterEffectSmooth } from './ui/typewriter';
import { Button } from '../../@/components/ui/button';
import { Menu } from 'lucide-react';
// import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const AboutMe = () => {
  const [showDiv,setShowDiv]=useState(false);
  const [col,setCol]=useState('yellow');
  useEffect(() => {
    const handleScroll = () => {
      const div1 = document.getElementById('div1');
      if (div1) {
        const { top } = div1.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol('teal');
        } else {
          setCol('yellow');
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
      <div className='h-12 w-12 top-10 left-10 fixed bg-gradient-to-r from-[#214F4D] via-[#78C3C1] to-[#214F4D] flex flex-row items-center justify-center rounded-xl'>
        <Menu className='border-2 border-zinc-800 rounded h-8 w-8 cursor-pointer z-10' onClick={()=>{setShowDiv(!showDiv)}}/>
      </div>
     <div className='bg-black h-full w-full flex flex-col items-center justify-center overflow-y-hidden'>
        <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold text-white md:pt-32 md:text-5xl items-start">
            About Me
        </h1>
        <TracingBeam className="px-6 my-10 h-full pt-10">
          <TypewriterEffectSmooth words={words} className='pl-10'/>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 text-xl text-black dark:text-white pl-10 font-semibold flex flex-row items-center space-x-4">
            <Icon3dCubeSphere color={col}/>
           <div id='div1' className={col === 'yellow' ? "text-yellow-600" : "text-green-600"}> I am currently pursuing my B.Tech degree in Computer Science at IIT Mandi.</div>
          </motion.div>
          <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-2 text-2xl font-bold text-white md:text-4xl pl-16">
              Skills
          </h1>
     <div className="py-32 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
         <Card title="Next Js" icon={<IconBrandNextjs color='white' size={50} />}>
           <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>
        <Card title="React" icon={<IconBrandReact color='white' size={50} />}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-900"
            colors={[[226, 173, 242]]}
            />
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card title="MERN" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>
      </div>
      <div className="py-32 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
         <Card title="Next Js" icon={<IconBrandNextjs color='white' size={50} />}>
           <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>
        <Card title="React" icon={<IconBrandReact color='white' size={50} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-blue-900"
            colors={[[125, 211, 252]]}
            // dotSize={2}
            />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="MERN" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>
        </div>
        <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-2 text-2xl font-bold text-white md:text-4xl pl-16">
            Experience
        </h1>
        <div className="mx-auto max-w-2xl py-40 text-white antialiased  pt-2  ">
        {Project_list.map((project, i) => (
          <div key={`content-${i}`} className="mb-10 mt-4 md:mt-0 ">
          <h2 className={twMerge('text-3xl text-black dark:text-white font-semibold pb-4')}>{project.title}</h2>
          <div className="prose prose-sm dark:prose-invert mt-2 text-xl text-black dark:text-white">{project.description}</div>
          </div>
        ))}
        </div>
      </TracingBeam>
      </div>
    <motion.div className='h-3/5 w-1/5 rounded-xl z-10 top-28 left-14 fixed flex flex-col' 
    initial={{ opacity: 1, height: 0}}
    animate={{ opacity: showDiv ? 1 : 1, height: showDiv ? screen.height*3/5 : 0}}
    transition={{ duration: 0.5}}
    >
      <div className=" w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-x-transparent border-solid border-b-[#144542]"></div>
      <div className="bg-[#144542] h-3/5 w-1/5 "></div>

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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
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
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white  group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
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