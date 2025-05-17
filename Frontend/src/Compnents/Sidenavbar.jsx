import React from 'react'
import image from "../assets/HI2.png";
const Sidenavbar = () => {
  return (
    <div className='w-[90%] h-[10%] bg-[#C5E0FF] p-2'>
        <div className=' w-full h-full flex items-start items-center'>
            <div><img src={image} alt="" className='w-[35%] h-[20%] rounded-full bg-cover bg-center bg-transparent'/></div>
            {/* <div className='text-6xl h-full'>|</div> */}
            {/* <div>Dashboard</div> */}
        </div>
    </div>
  )
}

export default Sidenavbar