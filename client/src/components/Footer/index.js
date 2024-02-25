import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-[400px] w-full bg-[#0f4f31] flex flex-col items-center p-8'>
      <div className='flex text-5xl font-bold gap-1 text-white mb-8'>
        <h1>Fly</h1>
        <h1 className='text-mainGreen'>Pak</h1>
      </div>
      <div className='w-[50%] mb-8'>
      <p className='text-white font-medium text-xl text-center'>Nullam ultrices tortor non diam ullamcorper auctor. In urna tellus, auctor sit amet est ut, scelerisque volutpat diam.</p>
      </div>
      <div className='flex gap-4 mb-8'>
        <div className='p-4 bg-white rounded-full'><FaInstagram size={32}/></div>
        <div className='p-4 bg-white rounded-full'><FaFacebook size={32}/></div>
        <div className='p-4 bg-white rounded-full'><FaTwitter size={32}/></div>
        <div className='p-4 bg-white rounded-full'><FaYoutube size={32}/></div>
        <div className='p-4 bg-white rounded-full'><FaSkype size={32}/></div>
      </div>
      <div className='text-white' >
        <p>Copyright ©2024 All rights reserved, Copying of content is strictly forbidden</p>
      </div>
    </div>
  )
}

export default Footer
