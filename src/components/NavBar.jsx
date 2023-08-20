import React, { useState } from 'react'
import{ FaBars ,FaTimes} from 'react-icons/fa'
// import { useState } from 'react'; 


function NavBar() {
const [nav, setNav]=useState(false);
    const links=[
        {
          id: 1,
          link: "Home",
        },
        {
        id: 2,
        link: "about",
        },
        {
        id: 3,
        link: "Projects",
        },
        {
        id: 4,
        link: "experience",
        },
        {
        id: 5,
        link: "contact",
        },
    ];
  return (
    <div className='w-[100vw] flex items-center justify-center h-24 bg-black fixed z-10'>
      <div className='flex justify-between items-center w-[80%] h-24 px-4 text-white bg-black fixed'>
       <div>
        <h1 className='font-signature text-3xl sm:text-5xl'>Aman Tyagi</h1>
       </div>
       <ul className=' hidden md:flex'>

        {links.map(({id, link})=>(
            <li key={id} id='{id}' className=' pr-3 lg:px-4 cursor-pointer capitalize font-bold lg:text-xl
             text-gray-500 hover:scale-105 hover:border-b-2 border-gray-500
             duration-200'>{link}</li>
        ))}
       </ul>

       <div onClick={()=> setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
         {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
       </div>

       {nav &&(
         <ul className=' flex flex-col justify-center items-center absolute top-0 right-0 w-[290px] h-[450px] bg-gradient-to-b from-black to-gray-800 text-gray-500 rounded-lg md:hidden'>
            {links.map(({id, link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                {link}
            </li>
        ))}
         </ul>
       )}
    </div>
    </div>
  )
}

export default NavBar
