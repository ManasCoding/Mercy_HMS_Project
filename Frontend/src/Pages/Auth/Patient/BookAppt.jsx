import React, { useState } from "react";
import { toast } from 'react-toastify';
const BookAppt = () => {
  const [book , setBook] = useState([]);

  const items = [
    {
      id: 1,
      apptNo: "12345",
      name: "Dr. John Doe",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Cardiologist",
      status: "Available",
    },
    {
      id: 2,
      apptNo: "12345",
      name: "Dr. Jane Smith",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Dentist",
      status: "Available",
    },
    {
      id: 3,
      apptNo: "12345",
      name: "Dr. Michael Johnson",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Orthopedist",
      status: "Available",
    },
    {
      id: 4,
      apptNo: "12345",
      name: "Dr. Emily Davis",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Gynecologist",
      status: "Available",
    },
    {
      id: 5,
      apptNo: "12345",
      name: "Dr. Robert Wilson",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Pediatrician",
      status: "Available",

    },
    {
      id: 4,
      apptNo: "12345",
      name: "Dr. Emily Davis",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Gynecologist",
      status: "Available",
    },{
      id: 4,
      apptNo: "12345",
      name: "Dr. Emily Davis",
      age: "30",
      gender: "Male",
      attended: "Yes",
      specialization: "Gynecologist",
      status: "Available",
    },
  ];

  console.log(typeof book);

  const handleBooking = (id) => {
    // if (!book.includes(id)) {
    //   setBook([...book, id]);
    // }

    if (book.includes(id)) {
      // Remove from booked
      setBook(book.filter(itemId => itemId !== id));
    } else {
      // Add to booked
      setBook([...book, id]);
      toast.success("Booked successfully...");
    }
  };

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full h-[90vh] bg p-10 flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] p-5 shadow-lg shadow-black">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[3px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="relative w-full h-[90%] overflow-hidden overflow-y-auto border-[3px] border-[#0077ff94] bg-[#ffffff88] p-4">
          <div className="w-full flex items-center justify-between p-3 rounded-md bg-[#ffffff88]">
            <h1>Doctors ID</h1>
            <h1>Name</h1>
            <h1>Age</h1>
            <h1>Gender</h1>
            <h1>Attended</h1>
            <h1>Doctor</h1>
            <h1>status</h1>
            <h1>Action</h1>
          </div>

          {
            items.map((item) => (
              <div className="w-full flex items-center justify-between p-1 px-3 rounded-md bg-[#ffffff88] mt-4" key={item.id}>
                <h1>{item.apptNo}</h1>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
                <h1>{item.gender}</h1>
                <h1>{item.attended}</h1>
                <h1>{item.specialization}</h1>
                <h1>{item.status}</h1>
                <h1 className="px-5 py-2 rounded-md bg-[#65adff] text-white flex justify-center items-center" style={{ backgroundColor: book.includes(item.id) ? 'red' : '#65adff' }} onClick={() => handleBooking(item.id)}>{book.includes(item.id) ? 'Booked' : 'Book'}</h1>
              </div>
            ))
          }

          <div className="flex items-center justify-center p-4 text-sm">A list of Doctors in this hospital.</div>
                  
        </div>
      </div>
    </div>
  );
};

export default BookAppt;
