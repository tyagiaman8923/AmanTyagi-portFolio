import React from 'react'

const About = () => {
  return (
    <div name='about' id='2' className='h-full w-full md:h-[80vh] bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
               <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>   
            </div>
            <p className='text-xl mt-20'>
            I am a final year B.Tech student with a fervent 
            passion for full-stack development. Proficient in HTML, CSS, JavaScript, and frameworks like React,
             I have successfully crafted dynamic web interfaces, complemented by my backend expertise in Node.js, 
             Express, and MongoDB.
            </p>

            <br />

            <p className=' text-xl'>
            My journey is enriched by a commitment to mastering Data Structures and Algorithms,
              evident in my engagement with coding challenges and competitions. Through a collection of impactful web
               projects, I have demonstrated my creativity and problem-solving skills. As I near the end of my academic
                journey, I am excited to channel my skills and enthusiasm into a rewarding career in the tech industry.
            </p>
        </div>
      
    </div>
  )
}

export default About
