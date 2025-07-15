import React from 'react'
import Sidenavbar from '../../../Compnents/Sidenavbar'
import BookAppt from './BookAppt'
import Sidebar from '../../../Compnents/Sidebar'
const BookApptpage = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[15%] h-screen'><Sidebar /></div>
            <div className='w-[85%] h-screen flex flex-col items-center justify-between gap-5'>
                <Sidenavbar />
                <BookAppt />
            </div>
        </div>
    </div>
  )
}

export default BookApptpage