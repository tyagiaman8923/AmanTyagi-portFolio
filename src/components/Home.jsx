import React from 'react'
import HeroImage from '../assets/6323120075615356334.jpg'
import github from "../assets/github.png";
import linkdin from "../assets/317750_linkedin_icon.png";
import insta from "../assets/3225191_app_instagram_logo_media_popular_icon.png";
import { Typewriter } from "react-simple-typewriter";
import TypewriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div id='home' className='min-h-[790px] h-full md:h-[80vh] w-full pt-[100px] md:pt-8  bg-gradient-to-b from-black via-black to-gray-800' name='home'>

      <div className='h-full max-w-[1024px] mx-auto flex flex-col md:flex-row'>
        
        <div className='flex flex-col h-full justify-center items-center md:items-start gap-4 pt-6 w-full md:w-[60%]'>

              <div className="text-4xl h-32 md:h-[30%] pb-10 lg:text-6xl font-bold text-white text-center md:text-left">
              <Typewriter
                words={[
                  "I am a Full Stack Developer",
                  "I am a Quick Learner",
                  "I love Building Scalable Applications"
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
           
            <p className='hidden md:block text-gray-400 py-4 w-[90%] md:max-w-md'>Hey there, I'm Aman Tyagi! I'm a M.Tech student at NIT Kurukshetra, specializing 
              in Computer Engineering, and a full-stack developer with a penchant for turning ideas into interactive digital experiences. Join me as I 
              showcase my journey through a collection of projects that blend creativity and technology.
            </p>
            <div className='flex gap-4 items-center justify-center'>
                <div className='hidden md:block h-14 w-14 rounded-full cursor-pointer'>
                  <a href="https://github.com/tyagiaman8923"><img className='h-full w-full' src={github} alt="" /></a>
                </div>
                <div className='hidden md:block h-14 w-14 rounded-full  cursor-pointer'>
                 <a href="https://www.instagram.com/tyagiaman8923/"> <img className='h-full w-full' src={insta} alt="" /></a>
                </div>
                <div className='hidden md:block h-14 w-14 rounded-2xl  cursor-pointer'>
                  <a href="https://www.linkedin.com/in/aman-tyagi-033322262/"><img className='h-full w-full' src={linkdin} alt="" /></a>
                </div>
            </div>
            <div className='flex gap-2 items-center justify-center'>

                {/* <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                     bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500'>
                    portfolio
                </button> */}
                
            </div>
        </div>
        
        <div className='h-full w-full md:w-[40%] flex flex-col justify-center items-center'>
            <img src={HeroImage} alt="my profile" className=' rounded-3xl w-[60%] md:w-[95%]'/>
            <p className='block md:hidden font-bold text-gray-400 py-4 w-[90%] md:max-w-md'> 
              <TypewriterEffect
                text="Hey there, I'm Aman Tyagi! I'm a M.Tech student at NIT Kurukshetra, specializing 
                      in Computer Engineering. Join me as I showcase my journey through collection of projects that blend creativity and technology."
                speed={1} 
                cursor
                cursorStyle="|" 
              />
            </p>
        </div>

      </div>
      <div  className=' absolute select-none text-4xl font-bold text-gray-700 bottom-14 scale-500 right-[500px] hidden lg:flex '>Aman Tyagi</div>
    </div>
  )
}

export default Home
