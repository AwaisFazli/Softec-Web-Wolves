import React from 'react'
import Navbar from '../Navbar/Navbar'

const PlanningAndPreparations = () => {
  return (
    <div>
      <div className="h-[80vh] w-full relative">
        <Navbar />
        <img
          src="https://hajjumrahplanner.com/wp-content/uploads/banners-home/banner11.jpg"
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
        <div className="absolute z-30 left-1/2 top-1/2 flex flex-col gap-6 items-center justify-center -translate-x-1/2 text-white">
          <h1 className="w-[90%] text-7xl text-center font-medium">Planning and Preparations</h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">A successful Hajj or Umrah requires careful planning and preparation. Find out what needs to be done before leaving here.</h1>
        </div>
      </div>
    </div>
  )
}

export default PlanningAndPreparations
