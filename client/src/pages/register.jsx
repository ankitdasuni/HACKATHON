import React, { useRef } from "react";
// import reactimg from "../assets/react.svg";

import InputBox from "../components/InputBox";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="w-full h-[600px] flex grid grid-cols-2 rounded-lg">
      <div className="p-2">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={assets.Login_img_3}
        ></img>
      </div>
      <div className="flex flex-col gap-6 bg-white  m-2 rounded-xl items-center pt-32 border-3 border-blue-700">
        <div className="w-48 flex items-center justify-center">
          <img src={assets.logo} />
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold m-2">Register</h1>
            <p className="text-gray-600">
              Already have account?{" "}
              <span
                className="text-[rgb(94,23,235)] cursor-pointer hover:text-[rgb(149,102,242)] transition duration-200"
                onClick={() => navigate("/login")}
              >
                Log In
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <InputBox
              placeholder={"Name"}
              type={"text"}
              varient={"primary"}
              refer={nameRef}
            />
            <InputBox
              placeholder={"lastName"}
              type={"text"}
              varient={"primary"}
              refer={lastnameRef}
            />
            <InputBox
              placeholder={"Username"}
              type={"text"}
              varient={"primary"}
              refer={usernameRef}
            />
            <InputBox
              placeholder={"Password"}
              type={"password"}
              varient={"primary"}
              refer={passwordRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
