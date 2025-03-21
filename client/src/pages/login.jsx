import React, { useRef } from "react";
// import reactimg from "../assets/react.svg";
import InputBox from "../components/InputBox";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="w-full h-[100vh] flex grid grid-cols-2 min-h-screen bg-[rgb(44,38,56)] ">
      <div className="my-2">
        <img
          className="object-cover w-full h-full rounded-xl"
          // src={reactimg}
        ></img>
      </div>
      <div className="flex flex-col gap-6 bg-white  m-2 rounded-xl items-center pt-32">
        <div className="w-48 flex items-center justify-center">
          {/* <img src={reactimg} /> */}
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold m-2">Log In</h1>
            <p className="text-gray-600">
              Want to create new account?{" "}
              <span
                className="text-[rgb(94,23,235)] cursor-pointer hover:text-[rgb(149,102,242)] transition duration-200"
                // onClick={() => navigate("/login")}
              >
                Log In
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
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
