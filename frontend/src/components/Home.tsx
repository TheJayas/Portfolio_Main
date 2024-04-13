import withSplashScreen from "./withSplashScreen"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import img1 from "../assets/photo4-modified.jpeg"
import { TypeAnimation } from "react-type-animation";
import { IconBrandGithub,IconMail,IconBrandLinkedin ,IconArrowBadgeRight} from "@tabler/icons-react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";


const Home = () => {
  return (
    <BackgroundGradientAnimation>
    <div className=" w-lvw h-screen flex flex-row justify-evenly items-center px-12 gap-x-10">
      <div className=" w-3/5 h-screen flex flex-col pt-40 pb-20">
        <div className="w-full h-2/5 flex flex-col space-y-6  justify-center">
          <h1 className="text-1xl text-yellow-500 font-mono">Web-App Expert</h1>  
          <h1 className="text-2xl text-zinc-300 font-sans">Hi There, I am Shivam Jaiswal</h1>  
          <TypeAnimation className="text-zinc-100 font-serif text-6xl flex item-center"
            sequence={[
              'I am a full-stack Developer',1000, 
              'I am specialized in developing Web-Apps',1000,
              'I am also an Open-source Contributor.',1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="h-1/5"></div>
        <div className="w-full h-2/5 flex flex-row space-x-4 items-center z-30">
          <a href="https://github.com/TheJayas"><IconBrandGithub size={50} color="white" className="hover:animate-bounce"/></a>
          <a href="https://www.linkedin.com/in/shivam-jaiswal-54088a266/"><IconBrandLinkedin size={50} color="white" className="hover:animate-bounce"/></a>
          <a href="mailto:shivam181106@gmail.com"><IconMail size={50} color="white" className="hover:animate-bounce"/></a>
          <a href="http://localhost:5173/contact" className="flex flex-row items-center justify-center hover:animate-none">
          <TextGenerateEffect words="Contact Me"/>
          <IconArrowBadgeRight size={50} color="white" className="hover:animate-bounce"/>
          </a>
        </div>
      </div>
    <img className=" w-1/5 h-2/5 mt-12 rounded-2xl" src={img1}/>
    </div>
    </BackgroundGradientAnimation>
  )
}

export default withSplashScreen(Home);
