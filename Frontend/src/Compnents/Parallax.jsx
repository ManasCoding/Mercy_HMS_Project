// import React from 'react'
import React from "react";  
import image from "../assets/SUM.jpg";
const Parallax = () => {
  return (
    <>
      <div className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-fixed bg-cover bg-center bg-hero">
        <img src={image} alt="" className="w-full h-full object-cover fixed z-[-1] top-0"/>
        <div className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-fixed bg-cover bg-center bg-hero">
          <h1 className="text-white font-extrabold text-9xl mb-4">Mercy Hospital</h1>
          <p className="text-white font-extrabold text-2xl">
            NABH Accredited Hospital, NABL accredited diagnostics laboratory
          </p>
        </div>
      </div>  
    </>
  );
};

export default Parallax;
