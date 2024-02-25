import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HajjUmrahSection = () => {
  const navigate = useNavigate()
  return (
    <div className='p-4'>
      <div className='bg-black flex justify-end rounded-xl overflow-hidden relative'>
        <img src="https://www.desktopbackground.org/download/1024x600/2015/02/14/902610_khana-kaba-wallpapers-hd-download-free-islamic-book_1024x768_h.jpg" alt=""
        className='w-[50%] h-full object-cover' />
        <div className='inset-0 bg-black opacity-50 absolute'/>
        <div className='inset-0 absolute flex flex-col justify-center px-12  w-[30%]'>
          <h1 className='text-[#bf9b30] text-4xl font-semibold leading-normal mb-8'>Welcome to Hajj Umrah Planner</h1>
          <h1 className='text-white text-xl font-medium'>An online platform dedicated to assisting pilgrims planning to perform Hajj and Umrah.</h1>
        <button className='flex justify-end text-[#bf9b30] transition-all hover:translate-x-1 items-center gap-4' onClick={() => navigate("/hajj&umrah")}>
          <span>Learn More</span>
          <FaArrowRight color='#bf9b30'/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default HajjUmrahSection
