import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TourGuide from '../components/HajjAndUmrahSections/TourGuide'
import Footer from '../components/Footer'
const HajjAndUmrahPage = () => {
  return (
    <div>
      <div className="h-[50vh] w-full relative">
        <Navbar />
        <img
          src="https://hajjumrahplanner.com/wp-content/uploads/banners-home/banner11.jpg"
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
      </div>
      <TourGuide/>
      <Footer/>
    </div>
  )
}

export default HajjAndUmrahPage
