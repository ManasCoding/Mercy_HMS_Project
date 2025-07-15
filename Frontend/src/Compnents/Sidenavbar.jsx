import image from "../assets/HI2.png";
import { useState, useEffect } from 'react';
// import axios from "../helper/config";
import axios from "axios";
const Sidenavbar = () => {


  const [res, setRes] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:7000/userProfile", {
        withCredentials: true
      });
      // console.log(res.data);
      setRes(res.data.name);
      // setRes(JSON.stringify(res.data.name)); 
 
    } catch (err) {    
      console.error("Error fetching data:", err.message);
    }
  };

useEffect(() => {
  fetchData();
}, []);



  return (
    <div className='w-[90%] h-[10%] bg-[#C5E0FF] p-2'>
        <div className=' w-full h-full flex items-start items-center'>
            <div><img src={image} alt="" className='w-[35%] h-[20%] rounded-full bg-cover bg-center bg-transparent'/></div>
            {/* <div className='text-6xl h-full'>|</div> */}
            {/* <div>{res}</div> */}
            <div>Project is under development</div>
        </div>
    </div>
  )
}

export default Sidenavbar