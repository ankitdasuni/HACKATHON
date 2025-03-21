import React, { useRef } from "react";
import InputBox from "../components/InputBox";
import reactimg from "../assets/react.svg";
import Button from "../components/Button";
import axios from "axios";
import { tokenatom } from "../atom/atom";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [token, setToken] = useRecoilState(tokenatom);

  const onSumbitHandler = async () => {
    try {
      const { data } = await axios.post(backendUrl + `/api/admin/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("atoken", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };
  return (
    <div className="w-full h-[100vh] flex grid grid-cols-2 min-h-screen bg-[rgb(44,38,56)] ">
      <div className="my-2">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={reactimg}
        ></img>
      </div>
      <div className="flex flex-col gap-6 bg-white  m-2 rounded-xl items-center pt-32">
        <div className="w-48 flex items-center justify-center">
          <img src={reactimg} />
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold m-2">Admin Log In</h1>
            {/* <p className="text-gray-600">
              Want to create new account?{" "}
              <span
                className="text-[rgb(94,23,235)] cursor-pointer hover:text-[rgb(149,102,242)] transition duration-200"
                // onClick={() => navigate("/login")}
              >
                Log In
              </span>
            </p> */}
          </div>
          <div className="flex flex-col items-center  gap-3">
            <InputBox
              placeholder={"Username"}
              type={"text"}
              varient={"primary"}
              refer={emailRef}
            />
            <InputBox
              placeholder={"Password"}
              type={"password"}
              varient={"primary"}
              refer={passwordRef}
            />
            <Button
              click={onSumbitHandler}
              varient={"primary"}
              size={"lg"}
              text={"login"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
