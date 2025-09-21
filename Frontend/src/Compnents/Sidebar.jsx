import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Sidebar = () => {

  const [items, setItems] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
      try {
        const res = await axios.get("https://mercy-hms-backend.onrender.com/api/Profile", { withCredentials: true });
        const firstName = res.data.name.split(" ")[0];
        // console.log(res.data);
        setItems(firstName);
        setProfilePic(res.data.image);
  
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    const logout = async () => {
      try {
        console.log("logout");
        const res = await axios.post("https://mercy-hms-backend.onrender.com/api/logout", { withCredentials: true });
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
          <div className=' w-full flex items-start gap-6 p-5'>
            <div className='rounded-full bg-cover bg-white'><img src={`https://mercy-hms-backend.onrender.com/${profilePic}`}
                  alt="profile Img"
                  className="border-2 border-gray-100 w-[50px] h-[50px] object-cover rounded-full shadow-lg cursor-pointer" /></div>
            <div className='flex flex-col'>
              <div>{items}</div>
              <div className='text-xs'>Patient</div>
            </div>
          </div>

          <hr className='w-[100%]'/>

          <div className='w-full flex flex-col gap-2 p-5'>
            <Link to="/user/adminpage"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Dashboard</div></Link>
            <Link to="/user/doctors/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Doctors</div></Link>
            <Link to="/user/patients/record"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Patients</div></Link>
            <Link to="/user/likely/outbreaks"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Appointments</div></Link>
            <Link to="/user/likely/outbreaks"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>OutBreaks</div></Link>
            <Link to="/user/profile"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Profile</div></Link>
            <Link to="/user/password/update"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>Cange Password</div></Link>
            <Link to="/user/book/appointment"><div className='hover:bg-[#C5E0FF] text-lg px-2 rounded-md'>BookAppointment</div></Link>
          </div>

          
        </div>
        <div className=' text-lg px-10 rounded-md mb-10'><button  onClick={logout} className="hover:bg-white hover:border-secondary active:scale-110 hover:text-black rounded-3xl px-5 py-1 border-2 bg-secondary text-white text-xl font-bold">logout</button></div>
      </div>
    </div>
  ) 
}

export default Sidebar