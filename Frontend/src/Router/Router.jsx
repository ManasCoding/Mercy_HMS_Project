import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Public/Home'
import Login_Form from '../Pages/Public/Login_Form'
import Register_Form from '../Pages/Public/Register_Form'
import AboutUs from '../Pages/Public/AboutUs'
import Contact from '../Pages/Public/Contact'
import Username from '../Pages/Public/Username'
import Adminpage from '../Pages/Auth/Patient/Adminpage'
import Profilepage from '../Pages/Auth/Patient/Profilepage'
import Passwordpage from '../Pages/Auth/Patient/Passwordpage'
import DoctorsRecordpage from '../Pages/Auth/Patient/DoctorsRecordpage'
import Outbreakpage from '../Pages/Auth/Patient/Outbreakpage'
import PatientRecordpage from '../Pages/Auth/Patient/PatientRecordpage'
const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/contact-us" element={<Contact />}/>
            <Route path="/login" element={<Login_Form />}/>
            <Route path="/register" element={<Register_Form />}/>
            <Route path="/search/username" element={<Username />}/>





            <Route path="/user/adminpage" element={<Adminpage />}/>
            <Route path="/user/profile/update" element={<Profilepage />}/>
            <Route path="/user/password/update" element={<Passwordpage />}/>
            <Route path="/user/doctors/record" element={<DoctorsRecordpage />}/>
            <Route path="/user/likely/outbreaks" element={<Outbreakpage />}/>
            <Route path="/user/patients/record" element={<PatientRecordpage />}/>
            
        </Routes>
    </div>
  )
}

export default Router