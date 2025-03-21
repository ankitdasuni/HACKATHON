import React from "react";
import { useRecoilState } from "recoil";
import { tokenatom } from "../atom/atom";
import admin_logo from "../assets/react.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [atoken, setToken] = useRecoilState(tokenatom);
  const navigate = useNavigate();

  const logout = () => {
    atoken && localStorage.removeItem("atoken");
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-green-200 ">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-16 sm:w40 cursor-pointer" src={admin_logo} />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <Button click={logout} text={"Logout"} varient={"primary"} size={"md"} />
    </div>
  );
}
