import React from 'react'
import arrayDestruct from '../assets/portfolio/Screenshot 2023-07-23 155858.png'
import navbar from '../assets/portfolio/Screenshot 2023-07-23 160619.png'
import reactParallax from '../assets/portfolio/Screenshot 2023-08-19 221133.png'
// import usestate from '../assets/portfolio/usestate.jpg'

const Projects = () => {
  const Projects=[
    {
      id:1,
      // name:Password-App,
      src: arrayDestruct
    },
    {
    id:2,
    // name:Weather-App,
    src: navbar
    },
    {
    id:3,
    // name:Qr-code,
    src: reactParallax
    },
    
  ]

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-[100%] pb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col gap-12 px-6 sm:px-4 md:px-0">
          {Projects.map(({ id, src}) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <div className='flex flex-col sm:flex-row w-full h-[450px] sm:h-[400px] bg-gradient-to-b from-black to-gray-800 hover:scale-105 duration-200 rounded-lg'>

                <div className='h-[345px] sm:h-80 w-[100%] sm:w-[60%] my-auto'>
                  <img
                    src={src}
                    alt=""
                    className=" object-cover shadow-md shadow-gray-500 rounded-lg duration-200 h-[95%] w-[95%] hover:scale-105 mx-auto my-2"
                  />
                </div>

                <div className='flex sm:flex-col h-[100px] sm:h-80 w-full sm:w-[40%] sm:gap-8 px-2 sm:px-8 sm:pt-12 justify-between sm:justify-center items-center'>
                  <h3 className=' font-bold text-2xl'>project name</h3>
                  <p className=' hidden sm:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus repellat culpa officia nam quos.</p>
                  <button className=' bg-blue-400 px-4 py-2 w-[90px] h-[40px] rounded-lg text-xl hover:scale-105 duration-200'>view</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
