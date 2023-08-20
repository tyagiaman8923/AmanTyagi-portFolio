import React from 'react'
import linkdin from "../assets/317750_linkedin_icon.png";
import insta from "../assets/3225191_app_instagram_logo_media_popular_icon.png";
import github from "../assets/github.png";
import facebook from "../assets/5296499_fb_facebook_facebook logo_icon.png"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[60vh] bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          
          <div className='flex w-[100%] h-11 items-center justify-center gap-6 flex-wrap mt-10 sm:mt-28'>
            
            <div className='flex items-center justify-center gap-4'>
              <div className='text-2xl font-bold'>
                <a href="https://www.linkedin.com/in/aman-tyagi-033322262/">Linkdin</a>
              </div>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
               <a href="https://www.linkedin.com/in/aman-tyagi-033322262/"><img src={linkdin} alt="" /></a>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <div className='text-2xl font-bold'>
                <a href="https://www.instagram.com/tyagiaman8923/">Instagram</a>
              </div>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://www.instagram.com/tyagiaman8923/"><img src={insta} alt="" /></a>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <div className='text-2xl font-bold'>
               <a href="https://github.com/tyagiaman8923">Github</a>
              </div>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://github.com/tyagiaman8923"><img src={github} alt="" /></a>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <div className='text-2xl font-bold'>
              <a href="https://www.facebook.com/profile.php?id=100058209712060">Facebook</a>
              </div>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://www.facebook.com/profile.php?id=100058209712060"><img src={facebook} alt="" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
