import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import { RecoilRoot, useRecoilSnapshot, useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tokenatom } from "./atom/atom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [atoken, setToken] = useRecoilState(tokenatom);
  return atoken ? (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
