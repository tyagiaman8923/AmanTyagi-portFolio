import React from 'react'
import linkdin from "../assets/317750_linkedin_icon.png";
import insta from "../assets/3225191_app_instagram_logo_media_popular_icon.png";
import github from "../assets/github.png";
import facebook from "../assets/5296499_fb_facebook_facebook logo_icon.png"


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

  

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qaut8j", // Replace with your EmailJS Service ID
        "template_egmj48q", // Replace with your EmailJS Template ID
        form.current,
        "9ph4SGWkEWODrAzyO" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send message", error.text);
        }
      );
  };
  return (
    <div
      name="contact" id='contact'
      className=" w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
       
      <div className='w-full  mx-auto flex flex-col justify-center items-center'>
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-screen-lg mt-16"
        >
          <label className="block text-lg mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            required
          />

          <label className="block text-lg mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            required
          />

          <label className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>

          {messageSent && (
            <p className="text-green-400 text-center mt-4">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </div>
      <div className="flex flex-col p-4  max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          
          
          <div className='flex w-[100%] h-full items-center justify-center gap-4 flex-wrap mt-10'>
            
            <div className='flex w-64  items-center  gap-4'>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
               <a href="https://www.linkedin.com/in/aman-tyagi-033322262/"><img src={linkdin} alt="" /></a>
              </div>
              <div className='text-2xl font-bold'>
                <a href="https://www.linkedin.com/in/aman-tyagi-033322262/">Linkedin</a>
              </div>
            </div>

            <div className='flex w-64  items-center  gap-4'>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://www.instagram.com/tyagiaman8923/"><img src={insta} alt="" /></a>
              </div>
              <div className='text-2xl font-bold'>
                <a href="https://www.instagram.com/tyagiaman8923/">Instagram</a>
              </div>
              
            </div>

            <div className='flex w-64  items-center  gap-4'>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://github.com/tyagiaman8923"><img src={github} alt="" /></a>
              </div>
              <div className='text-2xl font-bold'>
               <a href="https://github.com/tyagiaman8923">Github</a>
              </div>
              
            </div>

            <div className='flex w-64  items-center  gap-4'>
              <div className='h-10 w-10 rounded-full  cursor-pointer'>
                <a href="https://www.facebook.com/profile.php?id=100058209712060"><img src={facebook} alt="" /></a>
              </div>
              <div className='text-2xl font-bold'>
              <a href="https://www.facebook.com/profile.php?id=100058209712060">Facebook</a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
      <div className='font-signature text-3xl sm:text-5xl flex justify-center'><h2>Thank you for checking out! </h2></div>
    </div>
  )
}

export default Contact
