import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const EditProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({
    gender: "",
    date: "",
    phone: "",
    address: "",
  });
  
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
    } catch (error) {
      console.log(error);
    }
  }


  const updateHandler = () => {
    navigate("/user/profile/update");
  };


  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const gender = user.gender;
      const date = user.date;
      const phone = user.phone;
      const address = user.address;
      const res = await axios.post("http://localhost:7000/api/updateprofile", {
        gender,
        date,
        phone,
        address,
      }, { withCredentials: true }, { "Content-Type": "multipart/form-data" });
      console.log("response", res.data);
      toast.success("You've been successfully updated...");
      navigate("/user/profile");
    } catch (err) {
      console.error("Error fetching data:");
    }
  };

  const [userImage, setUserImage] = useState({
    image: "",
  });

  const inputImageChangeHandler = (e) => {
    setUserImage({ ...userImage, image: e.target.files[0] });
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    console.log("userImage");
    console.log(userImage.image);
    try {
      const formData = new FormData();
      formData.append("image", userImage.image);
      const ress = await axios.post("http://localhost:7000/api/upload", formData, { withCredentials: true });
      console.log("response", ress.data);
      toast.success("You've been successfully updated...");
      // navigate("/user/adminpage");
    } catch (err) {
      console.error("Error fetching data:");
    }
  };

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full h-screen bg p-10 flex items-center justify-center">
      <div className="relative w-[60%] p-5 shadow-lg shadow-black">
            <div className="absolute inset-0 bg-cover bg-center filter blur-[3px]"style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="relative z-10 w-full border-[3px] border-[#0077ff94] bg-[#ffffff88] rounded-md p-2 px-6">
            <div className="w-full h-20 flex justify-center items-center">
                <form onSubmit={handleImageSubmit} method="post" enctype="multipart/form-data" className="w-full h-full flex justify-between items-center">
                  <input type="file" name="image" onChange={inputImageChangeHandler}/>
                  <input type="submit" className="hover:bg-white hover:border-secondary active:scale-110 hover:text-black rounded-3xl px-5 py-1 border-2 bg-secondary text-white text-xl font-bold" />
                </form>
            </div>
                  <form action="" onSubmit={handleSubmit}>
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
                        <select className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2" name="gender" onChange={inputChangeHandler} value={user.gender}>
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="w-full h-10 flex items-center justify-between py-1">
                        <span className="text-lg font-alice font-bold">Date of Birth</span>
                        <input type="date" className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2" name="date" onChange={inputChangeHandler} value={user.date}/>
                    </div>

                    <div className="w-full h-10 flex items-center justify-between py-1">
                        <span className="text-lg font-alice font-bold">Email</span>
                        <span className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2">
                          {userDetails?.email}
                        </span>
                    </div>
                    <div className="w-full h-10 flex items-center justify-between py-1">
                        <span className="text-lg font-alice font-bold">Phone</span>
                        <input type="number" className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm px-2" name="phone" onChange={inputChangeHandler} value={user.phone}/>
                    </div>
                    <div className="w-full h-10 flex items-center justify-between py-1">
                        <span className="text-lg font-alice font-bold">Address</span>
                        <input type="text" className="border-[3px] border-slate-400 h-full w-[70%] bg-[#d0cdcdb6] rounded-sm overflow-hidden overflow-x-scroll px-2" name="address" onChange={inputChangeHandler} value={user.address}/>
                    </div>
                    <div className="w-full h-10 flex items-center justify-center py-1 mt-2">
                        <button className="hover:bg-white hover:border-secondary active:scale-110 hover:text-black rounded-3xl px-5 py-1 border-2 bg-secondary text-white text-xl font-bold" type="submit">Update</button>
                    </div>
                  </form>
            </div>
      </div>
    </div>
  );
};

export default EditProfile;