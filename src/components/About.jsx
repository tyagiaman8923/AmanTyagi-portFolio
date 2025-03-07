import React from 'react'

const About = () => {
  return (
    <div name='about' id='about' className='h-full w-full md:h-[80vh] bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
               <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>   
            </div>
            <p className='md:text-xl md:mt-16 text-gray-400'>
            I am a first-year M.Tech student at NIT Kurukshetra, specializing in Computer Engineering, and a 
            passionate full-stack developer. I completed my B.Tech in Computer 
            Science & Engineering from J.K. Institute of Applied Physics and Technology, University of Allahabad, with a CGPA of 8.3.
            With expertise in C, C++, Python, Java, and modern web technologies like React, Tailwind CSS, Node.js,
             Express.js, and MongoDB, I have built several full-stack applications.
            </p>

            <br />

            <p className=' md:text-xl text-gray-400'>
            Beyond development, I am passionate about Data Structures and Algorithms (DSA) 
            and actively participate in coding challenges and competitions to enhance my problem-solving abilities.
            Through a collection of impactful projects, I continuously refine my skills and explore innovative solutions. As I advance
             in my academic and professional journey, I am eager to contribute my expertise to the tech industry and create meaningful technological solutions
            </p>
        </div>
      
    </div>
  )
}

export default About
