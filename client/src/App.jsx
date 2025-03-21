import React from "react";
import { Button } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from './pages/home';
import Doctor from './pages/doctor';
import MyProfile from './pages/myProfile';
import MyAppointments from './pages/myAppointments';
import Appointments from './pages/appointments';
import NavBar from './components/NavBar' ;
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="px-12">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />}/>
            <Route path="/doctor" element={<Doctor />}/>
            <Route path="/doctor/:speciality" element={<Doctor />}/>
            <Route path="/my-profile" element={<MyProfile />}/>
            <Route path="/my-appointments" element={<MyAppointments />}/>
            <Route path="/appointment/:docId" element={<Appointments />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
