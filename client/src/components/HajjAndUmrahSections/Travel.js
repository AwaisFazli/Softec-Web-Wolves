import React from 'react'
import Navbar from '../Navbar/Navbar'

const Travel = () => {
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
          <h1 className="w-[90%] text-7xl text-center font-medium">Travel</h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">Your journey will inevitably involve a great deal of travelling. Find out about what to expect when travelling here.</h1>
        </div>
      </div>
    </div>
  )
}

export default Travel
