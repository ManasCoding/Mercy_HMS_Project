// import React from 'react'
import { FaCog } from "react-icons/fa";
import { TbLockCog } from "react-icons/tb";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {

    const [profilePic, setProfilePic] = useState("");
    useEffect(() => {
      getUserDetails();
    }, []);
    const getUserDetails = async function ( ) {
      try {
        const response = await axios.get("https://mercy-hms-backend.onrender.com/api/Profile", { withCredentials: true });

        setProfilePic(response.data.image);
      } catch (error) {
        console.log(error);
      }
    };
  

  

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    
        <div className="relative w-[70%] h-[70%] p-5 shadow-lg shadow-black mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[3px] "
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="relative z-10 grid auto-rows-min gap-4 md:grid-cols-3 w-full">
            <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
              <h1 className="font-bold text-[#0077ff94]">Doctors</h1>
              <div className="text-4xl text-red-600 font-bold">
              </div>
              <NavLink
                to={"/user/doctors/record"}
                className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
              >
                View ➡️
              </NavLink>
            </div>
            <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
              <h1 className="font-bold text-[#0077ff94]">Patients</h1>
              <div className="text-4xl text-red-600 font-bold">
              </div>
              <NavLink
                to={"/user/patients/record"}
                className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
              >
                View ➡️
              </NavLink>
            </div>
          <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
            <h1 className="font-bold text-[#0077ff94]">Appointments</h1>
            <div className="text-4xl text-red-600 font-bold">
            </div>
            <NavLink
              to={"/user/likely/outbreaks"}
              className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
            >
              View ➡️
            </NavLink>
          </div>
            <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
              <h1 className="font-bold text-[#0077ff94]">Outbreaks</h1>
              <div className="text-4xl text-red-600 font-bold">
              </div>
              <NavLink
                to={"/user/likely/outbreaks"}
                className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
              >
                View ➡️
              </NavLink>
            </div>
          <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
            <h1 className="font-bold text-[#0077ff94]">Profile Updation</h1>
            <div className="relative text-4xl text-red-600 font-bold">
              <span>
                <img
                  src={`https://mercy-hms-backend.onrender.com/${profilePic}`}
                  alt="profile Img"
                  className="border-2 border-gray-100 w-[80px] h-[80px] object-cover rounded-full shadow-lg cursor-pointer"
                />
              </span>
              <span className="absolute bottom-[-2px] right-[-6px] text-[#0077ffae]">
                <FaCog />
              </span>
            </div>
            <NavLink
              to={"/user/profile"}
              className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
            >
              View ➡️
            </NavLink>
          </div>
          {/* <Skeleton className="aspect-video rounded-xl" />{" "} */}
          <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
            <h1 className="font-bold text-[#0077ff94]">Change Password</h1>
            <div className="text-4xl text-red-600 font-bold">
              <span className="text-black text-5xl font-black">
                <TbLockCog />
              </span>
            </div>
            <NavLink
              to={"/user/password/update"}
              className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
            >
              View ➡️
            </NavLink>
          </div>
            <div className="bg-[#ffffff88] aspect-video border-2 border-[#0077ff94] rounded-lg flex flex-col items-center justify-around hover:p-1 hover:bg-[#ffffffac]">
              <h1 className="font-bold text-[#0077ff94]">Book Appointment</h1>
              <div className="text-4xl text-red-600 font-bold">
              </div>
              <NavLink
                to={"/user/book/appointment"}
                className="cursor-pointer hover:underline decoration-2 decoration-blue-500 hover:underline-offset-4 hover:underline-blue"
              >
                View ➡️
              </NavLink>
            </div>
        </div>
      </div>
  );
};

export default Dashboard;
