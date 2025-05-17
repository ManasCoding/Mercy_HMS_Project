import React from 'react'
import Sidebar from '../../../Compnents/sidebar'
import Sidenavbar from '../../../Compnents/Sidenavbar'
import Dashboard from './Dashboard'
const Adminpage = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[15%] h-screen'><Sidebar /></div>
            <div className='w-[85%] h-screen flex flex-col items-center justify-between gap-5'>
                <Sidenavbar />
                <Dashboard />
            </div>
        </div>
    </div>
  )
}

export default Adminpage