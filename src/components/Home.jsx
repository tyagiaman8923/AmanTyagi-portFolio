import React from 'react'
import HeroImage from '../assets/IMG20220510105121.jpg'
import github from "../assets/github.png";
import linkdin from "../assets/317750_linkedin_icon.png";
import insta from "../assets/3225191_app_instagram_logo_media_popular_icon.png";

const Home = () => {
  return (
    <div className='h-full md:h-[80vh] w-full pt-[96px] md:pt-8 bg-gradient-to-b from-black via-black to-gray-800' name='home'>

      <div className='h-full max-w-[1024px] mx-auto flex flex-col md:flex-row'>
        
        <div className='h-full w-full md:w-[40%] flex justify-center items-center'>
            <img src={HeroImage} alt="my profile" className=' rounded-2xl w-[60%] md:w-[95%]'/>
        </div>

        <div className='flex flex-col h-full justify-center items-center md:items-start gap-4 lg:gap-8 p-4 w-full md:w-[60%]'>
           <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I am a Full stack developer</h2>
            <p className=' text-gray-400 py-4 w-[90%] md:max-w-md'>I have a eight years experience building and designing software
                .Currentlt I love to work on web application using technologies like React, Tailwind 
                , Next Js and Graphics.
            </p>
            <div className='flex gap-2 items-center justify-center'>
                <div className=' h-14 w-14 rounded-full cursor-pointer'>
                  <a href="https://github.com/tyagiaman8923"><img src={github} alt="" /></a>
                </div>
                <div className=' h-14 w-14 rounded-full  cursor-pointer'>
                 <a href="https://www.instagram.com/tyagiaman8923/"> <img className='h-full w-full' src={insta} alt="" /></a>
                </div>
                <div className=' h-14 w-14 rounded-2xl  cursor-pointer'>
                  <a href="https://www.linkedin.com/in/aman-tyagi-033322262/"><img src={linkdin} alt="" /></a>
                </div>
            </div>
            <div className='flex gap-2 items-center justify-center'>

                {/* <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                     bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500'>
                    portfolio
                </button> */}
                
            </div>
        </div>
        
      </div>
      <div className=' absolute select-none text-4xl font-bold text-gray-700 bottom-14 scale-500 right-[400px] hidden lg:flex'>Aman Tyagi</div>
    </div>
  )
}

export default Home