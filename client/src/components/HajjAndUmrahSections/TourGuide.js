import React from 'react'
import {useNavigate} from "react-router-dom"
import './TourGuide.css'

const TourGuide = () => {
  const navigate = useNavigate()
  return (
    <div className='p-12 bg-[#f3f3f3] flex flex-wrap gap-8 justify-center'>
      <div className='w-[48%] h-[400px] bg-red-400 relative transition-all hover:cursor-pointer' onClick={() => navigate("/planningAndPreparations")} id="card">
        <img src="https://hajjumrahplanner.com/wp-content/uploads/2016/11/checklist-icon.jpg" alt="" className='h-full w-full' />
        <div className='text-white bg-black bg-opacity-70 absolute top-10 left-5 px-4 py-2 rounded-full'>Planning and Preparations</div>
        <div id="cardDetails" className='absolute transition-all inset-0 h-full w-full z-20 text-white bg-black bg-opacity-50 flex items-center justify-center px-16'>
          A successful Hajj or Umrah requires careful planning and preparations. Find out what needs to be done before leaving here
        </div>
      </div>
      <div className='w-[48%] h-[400px] bg-red-400 relative transition-all hover:cursor-pointer' onClick={() => navigate("/travel")} id="card">
        <img src="https://hajjumrahplanner.com/wp-content/uploads/2016/11/arrival-jeddah-icon.jpg"  alt="" className='h-full w-full' />
        <div className='text-white bg-black bg-opacity-70 absolute top-10 left-5 px-4 py-2 rounded-full'>Travel</div>
        <div id="cardDetails" className='absolute transition-all inset-0 h-full w-full z-20 text-white bg-black bg-opacity-50 flex items-center justify-center px-16'>
          A successful Hajj or Umrah requires careful planning and preparations. Find out what needs to be done before leaving here
        </div>
      </div>
      <div className='w-[48%] h-[400px] bg-red-400 relative transition-all hover:cursor-pointer' onClick={() => navigate("/umrahGuide")} id="card">
        <img src="https://hajjumrahplanner.com/wp-content/uploads/2017/02/umrah-sai-icon.jpg" alt="" className='h-full w-full' />
        <div className='text-white bg-black bg-opacity-70 absolute top-10 left-5 px-4 py-2 rounded-full'>Umrah Guide</div>
        <div id="cardDetails" className='absolute transition-all inset-0 h-full w-full z-20 text-white bg-black bg-opacity-50 flex items-center justify-center px-16'>
          A successful Hajj or Umrah requires careful planning and preparations. Find out what needs to be done before leaving here
        </div>
      </div>
      <div className='w-[48%] h-[400px] bg-red-400 relative transition-all hover:cursor-pointer' onClick={() => navigate("/hajjGuide")} id="card">
        <img src="https://hajjumrahplanner.com/wp-content/uploads/2017/04/masjid-nabawi-620x300.jpg" alt="" className='h-full w-full' />
        <div className='text-white bg-black bg-opacity-70 absolute top-10 left-5 px-4 py-2 rounded-full'>Hajj Guide</div>
        <div id="cardDetails" className='absolute transition-all inset-0 h-full w-full z-20 text-white bg-black bg-opacity-50 flex items-center justify-center px-16'>
          A successful Hajj or Umrah requires careful planning and preparations. Find out what needs to be done before leaving here
        </div>
      </div>
    </div>
  )
}

export default TourGuide
