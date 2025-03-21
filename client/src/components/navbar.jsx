import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
// import {assets_admin} from '../assets/assets_admin/assets'
// import { NavLink } from 'react-router-dom'
function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const handleOnClick = () => {
    navigate("/login");
    setShowNav(false);
  };
  const handleLogoClick = () => {
    navigate("/");
    setShowNav(true);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4  mb-5 border-b border-b-gray-400 px-12">
      <img
        onClick={handleLogoClick}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      {showNav && (
        <ul className="hidden md:flex items-start gap-5 front-medium">
          <NavLink to="/">
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="./doctor">
            <li className="py-1">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="./about">
            <li className="py-1">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="./contact">
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
      )}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute right-4 top-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => {
                    navigate("my-profile");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("my-appointments");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={handleOnClick}
            className=" bg-green-200 text-white px-8 py-3 rounded-full fount-light hidden md:block"
          >
            Create Account
          </button>
        )}
        {/* <button onClick={handleOnClick} className=' bg-red-400 text-white px-8 py-3 rounded-full fount-light hidden md:block'>Create Account</button> */}
      </div>
    </div>
  );
}

export default NavBar;
