import React from 'react'
import Profile from './Profile'
import Sidenavbar from '../../../Compnents/Sidenavbar'
import Sidebar from '../../../Compnents/Sidebar'
const Profilepage = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[15%] h-screen'><Sidebar /></div>
            <div className='w-[85%] h-screen flex flex-col items-center justify-between gap-5'>
                <Sidenavbar />
                <Profile />
            </div>
        </div>
    </div>
  )
}

export default Profilepage