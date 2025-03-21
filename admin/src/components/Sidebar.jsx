import React from "react";

import SideBarCard from "./SideBarCard.jsx";
import { add, calender, HomeSVG, list } from "../assets/svgfile.jsx";

export default function Sidebar() {
  return (
    <div className="fixed w-64 h-screen flex flex-col gap-16 p-10 border-r-2 border-gray-400">
      <SideBarCard
        title={"Dashboard"}
        svg={HomeSVG}
        navigateto={"/Dashboard"}
      />
      <SideBarCard
        title={"Appointment"}
        svg={calender}
        navigateto={"/add-appointment"}
      />
      <SideBarCard title={"DoctorList"} svg={list} navigateto={"/DoctorList"} />
    </div>
  );
}
