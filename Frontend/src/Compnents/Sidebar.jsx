import React from 'react'
import { useState, useEffect } from 'react'
import image from "../assets/profile.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Sidebar = () => {

  const [items, setItems] = useState(null);
  // console.log(items.username);
  const navigate = useNavigate();

  const fetchData = async () => {
      try {
        const res = await axios.get("/dashboard");
        console.log(typeof res.data);
        setItems(res.data);
  
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    const logout = async () => {
      try {
        const res = await axios.post("http://localhost:7000/logout");
        console.log(res.data);
        navigate("/");
  
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  
  return ( 
    <div>
      <div className='w-full h-screen bg-[#65adff] flex flex-col justify-between'>
        <div className=' w-full flex flex-col items-start'>
          <div className=' w-full flex items-start gap-2 p-5'>
            <div className='w-[30%] h-[30%] rounded-full'><img src={image} alt="" /></div>
            <div className='flex flex-col'>
              <div>dvzsv</div>
              <div className='text-xs'>Patient</div>
            </div>
          </div>

          <hr className='w-[100%]'/>

          <div className='w-full flex flex-col gap-2 p-5'>
            <Link to="/user/adminpage"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Dashboard</div></Link>
            <Link to="/user/doctors/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Doctors</div></Link>
            <Link to="/user/patients/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Patients</div></Link>
            <Link to="/user/doctors/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Appointments</div></Link>
            <Link to="/user/likely/outbreaks"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>OutBreaks</div></Link>
            <Link to="/user/profile/update"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Profile</div></Link>
            <Link to="/user/password/update"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Cange Password</div></Link>
            <Link to="/user/doctors/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>BookAppointment</div></Link>
          </div>

          
        </div>
        <div className=' text-lg px-10 rounded-md mb-10'><button  onClick={logout} className='hover:bg-[#C5E0FF] text-lg rounded-md px-6'>logout</button></div>
      </div>
    </div>
  ) 
}

export default Sidebar