import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const PatientRecord = () => {

  const [users, setUsers] = useState([]);
  console.log(users);

  const getUsers = async function () {
    try {
      const response = await axios.get("http://localhost:7000/api/allUsers", { withCredentials: true });
      const allData = response.data;
      console.log(allData);
      setUsers(allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  
    const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="w-[90%] h-[90%] p-10 flex items-center justify-center">
      <div className="relative w-full h-full p-5 shadow-lg shadow-black flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center filter blur-[3px]" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="relative w-[99%] h-full overflow-hidden overflow-y-auto border-[3px] border-[#0077ff94] bg-[#ffffff88] p-4">
          <div className="w-full flex items-center justify-between p-3 rounded-md bg-[#ffffff88]">
            <h1>User ID</h1>
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Age</h1>
            <h1>Gender</h1>
          </div>

          {
            users.map((item) => (
              <div className="w-full flex items-center justify-between p-1 px-3 rounded-md bg-[#ffffff88] mt-4" key={item.id}>
                <h1>{item.pin}</h1>
                <h1>{item.name}</h1>
                <h1>{item.email}</h1>
                <h1>age</h1>
                <h1>male</h1>
              </div>
            ))
          }

          <div className="flex items-center justify-center p-4 text-sm">A list of Patients in this hospital.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PatientRecord