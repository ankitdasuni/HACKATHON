import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login.jsx";
import AddApointment from "./pages/Admin/AddApointment.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import DoctorList from "./pages/Admin/DoctorList.jsx";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-appointment" element={<AddApointment />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DoctorList" element={<DoctorList />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
