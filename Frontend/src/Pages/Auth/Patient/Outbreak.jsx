import React from 'react'

const Outbreak = () => {
    const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="w-[90%] h-[90%] p-10 flex items-center justify-center">
      <div className="relative w-full h-full p-5 shadow-lg shadow-black flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center filter blur-[3px]" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="relative w-[99%] h-full overflow-hidden overflow-y-auto border-[3px] border-[#0077ff94] bg-[#ffffff88] p-4">
          <div className="w-full flex items-center justify-between p-3 rounded-md bg-[#ffffff88]">
            <h1>Appt's No.</h1>
            <h1>Name</h1>
            <h1>Age</h1>
            <h1>Gender</h1>
            <h1>Attended</h1>
            <h1>Doctor</h1>
            <h1>status</h1>
            <h1>Action</h1>
          </div>

          <div className="flex items-center justify-center p-4 text-sm">A list of Patients in this hospital.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Outbreak