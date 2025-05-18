import React from 'react'
import Outbreak from './Outbreak'
import Sidebar from '../../../Compnents/Sidebar'
import Sidenavbar from '../../../Compnents/Sidenavbar'
const Outbreakpage = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[15%] h-screen'><Sidebar /></div>
            <div className='w-[85%] h-screen flex flex-col items-center justify-between gap-5'>
                <Sidenavbar />
                <Outbreak />
            </div>
        </div>
    </div>
  )
}

export default Outbreakpage