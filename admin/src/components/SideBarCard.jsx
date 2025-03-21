import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarCard(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${props.navigateto}`)}
      className="flex  items-center  hover:bg-green-200 cursor-pointer py-4 px-4 rounded-md"
    >
      {props.svg}
      <h1>{props.title}</h1>
    </div>
  );
}
