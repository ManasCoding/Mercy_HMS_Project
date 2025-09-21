import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async function ( ) {
    try {
      const response = await axios.get("http://localhost:7000/api/Profile", { withCredentials: true });
      console.log(response.data);
      const fullName = response.data.name;
      const parts = fullName.trim().split(" ");

      let firstName = "";
      if (parts.length > 0) {
        firstName = parts[0]; // get the first element
      }
      console.log(firstName);

      let middleName = "";
      if (parts.length > 2) {
        middleName = parts.slice(1, -1).join(" "); // handles multiple middle names
      }
      console.log(middleName);

      let lastName = "";
      if (parts.length > 1) {
        lastName = parts[parts.length - 1]; // get the last element
      }
      console.log(lastName);
      setUserDetails(response.data);
      setFirstName(firstName);
      setMiddleName(middleName);
      setLastName(lastName);
      setProfilePic(response.data.image);
    } catch (error) {
      console.log(error);
    }
  }


  // const updateHandler = () => {
  //   navigate("/user/profile/update");
  // };

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full h-screen bg p-10 flex items-center justify-center">
      <div className="relative w-[60%] p-5 shadow-lg shadow-black">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[3px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="relative z-10 w-full border-[3px] border-[#0077ff94] bg-[#ffffff88] rounded-md p-2 px-6">
          <div className="w-full h-20 flex justify-center items-center">
            <span>
              <img
                src={`https://mercy-hms-backend.onrender.com${profilePic}`}
                alt="profile Img"
                className="border-2 border-gray-100 w-[66px] h-[66px] object-cover rounded-full shadow-lg cursor-pointer"
              />
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">First Name</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {firstName}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Middle Name</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {middleName}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Last Name</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {lastName}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Gender</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {userDetails?.gender}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Date of Birth</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {userDetails?.date}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Email</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {userDetails?.email}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Phone</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {`+91 ${userDetails?.phone}`}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-between py-1">
            <span className="text-lg font-alice font-bold">Address</span>
            <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
              {userDetails?.address}
            </span>
          </div>
          <div className="w-full h-10 flex items-center justify-center py-1 mt-2">
            <Link to = {"/user/profile/update"}><button className="hover:bg-white hover:border-secondary active:scale-110 hover:text-black rounded-3xl px-5 py-1 border-2 bg-secondary text-white text-xl font-bold">Edit</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
