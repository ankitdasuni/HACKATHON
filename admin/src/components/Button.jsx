import React from "react";

export default function Button(props) {
  const VarientStyle = {
    primary: `flex py-4 items-center justify-center text-white bg-green-400 hover:bg-green-300 transition duration-300`,
    secondary: `flex items-center justify-center bg-[#7678ee] px-2 py-3 rounded-lg`,
  };

  const Size = {
    sm: `w-24 h-8 rounded-md   gap-1 text-md`,
    md: `w-32 h-12 rounded-lg  gap-2 text-lg`,
    lg: `w-40 h-16 rounded-xl  gap-4 text-lg`,
  };
  return (
    <div>
      <button
        onClick={props.click}
        className={`${VarientStyle[props.varient]} ${Size[props.size]} w-${
          props.width
        } ${props.others} cursor-pointer`}
      >
        {" "}
        {props.text}
        {props.img}
      </button>
    </div>
  );
}
