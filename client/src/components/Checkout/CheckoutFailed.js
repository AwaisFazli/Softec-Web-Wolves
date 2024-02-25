import React from 'react'
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
const CheckoutFailed = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <ImCross size={"92"} color='rgb(248, 113, 113)'/>
            <h1 className='text-2xl font-medium mt-4 text-red-400'>Payment Failed</h1>
            <h1 className='text-2xl font-medium mt-4 hover:cursor-pointer' onClick={() => navigate("/")}>Redirect to Home page</h1>
        </div>
    </div>
  )
}

export default CheckoutFailed
