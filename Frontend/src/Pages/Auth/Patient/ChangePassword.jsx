// import React from 'react'
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { changeLoggedOutUserPassword, mailerAPI } from "@/helper/API/user";
// import { jwtDecode } from "jwt-decode";

const ChangePassword = () => {
  const navigate = useNavigate();
  

  const [password, setpassword] = useState({
    newPassword: "",
    oldPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  // useEffect(() => {
  //   // Check if a message was passed via navigate
  //   if (location.state?.message) {
  //     toast.success(location.state.message);
  //   }
  // }, [location]);

  // const isFormValid = () => {
  //   const { newPassword1, newPassword2 } = password;

  //   if (!newPassword1.trim() || !newPassword2.trim()) {
  //     toast.error("Enter all the fields!!!");
  //     return false;
  //   }

  //   if (newPassword1 != newPassword2) {
  //     toast.error("New Passwords do not match. Please try again!!!");
  //     return false;
  //   }

  //   const passwordRegex =
  //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
  //   if (!passwordRegex.test(newPassword1)) {
  //     toast.error(
  //       "Invalid new password. It must be 8-10 characters with uppercase, lowercase, digit, and special character."
  //     );
  //     return false;
  //   }

  //   return true;
  // };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputChangeHandler = (e) => {
    setpassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);   
    try {
      const oldPassword = password.oldPassword;
      const newPassword = password.newPassword;
      const response = await axios.post("http://localhost:7000/api/updatepassword", {
        oldPassword,
        newPassword, 
      }, { withCredentials: true });
      console.log("response", response.data);
      toast.success("Password successfully updated...");
      navigate("/user/adminpage");

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const imageUrl =
    "https://img.freepik.com/premium-photo/hospital-hallway-unfocused-background_786878-6945.jpg?size=626&ext=jpg&ga=GA1.1.1289161518.1725302723&semt=ais_hybrid";

  return (
    <div className="relative w-full h-[88%] flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 shadow-lg shadow-[#005CC8] w-1/4 border-[#005CC8] border-4 rounded-md mx-auto px-2 py-5 "
      >
        <div className="w-full flex justify-center">
          <h1 className="shadow-lg shadow-[#005CC8] text-xl font-bold text-black border-4 border-[#3c97ff] bg-[#005CC8] px-2 py-1 rounded-full text-white hover:text-black">
            Password_Change-Form
          </h1>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            old Password{" "}
          </label>
          <div className="relative flex">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your old password..."
              name="oldPassword"
              value={password?.oldPassword}
              onChange={inputChangeHandler}
              className="w-full bg-[#0077ff94] px-2 font-semibold placeholder-[#005CC8] text-white focus:outline-none"
            />
            <div
              className="absolute right-0 cursor-pointer text-xl m-[2px] mr-1"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <ImEye /> : <RiEyeCloseFill />}
            </div>
          </div>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            New Password{" "}
          </label>
          <div className="relative flex">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your new password"
              name="newPassword"
              value={password?.newPassword}
              onChange={inputChangeHandler}
              className="w-full bg-[#0077ff94] px-2 font-semibold placeholder-[#005CC8] text-white focus:outline-none"
            />
            <div
              className="absolute right-0 cursor-pointer text-xl m-[2px] mr-1"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <ImEye /> : <RiEyeCloseFill />}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
