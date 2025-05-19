import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";
// import Button from "../../Compnents/button";
import {  useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PublicNav from "../../Compnents/PublicNav";
import axios from "../../helper/config";

const Register_Form = () => {
  // const navigate = useNavigate();
  // const Dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pin: "",
    firstpassword: "",
    secondpassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);


  function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
      setUser({ ...user, pin: generateRandomNumber(6) });
  }, []);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const imageUrl =
    "https://img.freepik.com/premium-photo/hospital-hallway-unfocused-background_786878-6945.jpg?size=626&ext=jpg&ga=GA1.1.1289161518.1725302723&semt=ais_hybrid";

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  // const isFormValid = () => {
  //   const { name, email, firstpassword, secondpassword } = user;

  //   if (!name || !email || !firstpassword || !secondpassword) {
  //     // toast.error("Enter all the fields!!!");
  //     alert("Enter all the fields!!!");
  //     return false;
  //   }
  // }

  

  // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$[1-9]/;
  //   if (!passwordRegex.test(password1)) {
  //   // toast.error(
  //   //   "Invalid password. Must be 8-10 characters with uppercase, lowercase, digit, and special character."
  //   // );
  //   alert("Invalid password. Must be 8-10 characters with uppercase, lowercase, digit, and special character.");
  //   return false;
  // }

  // if (firstpassword !== secondpassword2) {
  //   // toast.error("Passwords do not match.");
  //   alert("Passwords do not match.");
  //   return false;
  // }

  // const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  // if (!emailRegex.test(email)) {
  //   // toast.error("Invalid email format.");
  //   alert("Invalid email format.");
  //   return false;
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (isFormValid()) {
    //     // Dispatch(registerAPI(user));
    //     // navigate("/");
    //     console.log(user);
    //   }

    // const { name, email, pin, firstpassword, secondpassword } = user;
    
    // if (firstpassword !== secondpassword) {
    // // toast.error("Passwords do not match.");
    //   alert("Passwords do not match.");
    //   return;
    // }

    try {
      const username = user.name;
      const email = user.email;
      const password = user.firstpassword;
      
      const response = await axios.post("/signup", {
        username,
        email,
        password,
      });
      // setSuccess(true);
      console.log("Registered:", response.data);
      // Optionally reset form:
      setUser({ name: "", email: "", firstpassword: "", secondPassword: "" });
    } catch (err) {
      // setError(err.response.data);
      console.log(err.massage);
    } 

      
    }
          
  
  return (
    <div>

      <PublicNav />
      <div className="relative w-full h-[100%] flex flex-col items-center justify-center ">

      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <form
        onSubmit={handleSubmit} 
        className="relative z-10 shadow-lg shadow-[#005CC8] w-1/4 border-[#005CC8] border-4 rounded-md mx-auto  px-2 py-5  "
      >
        <div className="w-full flex justify-center">
          <h1 className="shadow-lg shadow-[#005CC8] text-xl font-bold text-black border-4 border-[#3c97ff] bg-[#005CC8] px-2 py-1 rounded-full text-white hover:text-black">
            Register-Form {user.name}
          </h1>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="name"
            value={user.name}
            onChange={inputChangeHandler}
            className="bg-[#0077ff94] font-semibold px-2 placeholder-[#005CC8] text-white focus:outline-none"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Email:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            value={user.email}
            onChange={inputChangeHandler}
            className="bg-[#0077ff94] px-2 font-semibold placeholder-[#005CC8] text-white focus:outline-none"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Patient-Id:{" "}
          </label>
          <input
            readOnly
            type="number"
            placeholder="Enter your admin pin..."
            name="pin"
            value={user.pin}
            onChange={inputChangeHandler}
            className="bg-[#0077ff94] px-2 font-semibold placeholder-[#005CC8] text-white focus:outline-none"
          />
        </div>

        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Password:{" "}
          </label>
          <div className="relative flex">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password..."
              name="firstpassword"
              value={user.firstpassword}
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
            Re-Enter Password:{" "}
          </label>
          <div className="relative flex">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Re-enter your password..."
              name="secondpassword"
              value={user.secondpassword}
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
        <div className="flex items-center justify-center mt-4">
          <button type="submit" className="text-white active:scale-110 rounded-lg hover:bg-white hover:text-black px-3 py-1 border-2 border-secondary text-xl font-bold">Register</button>
        </div>
      </form>
      <Link
        to="/login"
        className="relative z-10 text-black text-sm font-semibold hover:text-primary hover:underline hover"
      >
        Already have an account ? Login then...
      </Link>
      {/* <ToastContainer /> */}
    </div>
    </div>
  );
};


export default Register_Form;
