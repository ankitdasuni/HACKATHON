import React from "react";

export default function InputBox(props) {
  const VarientStyle = {
    primary: `w-68 px-2 py-2 border-1 border-gray-400 rounded-lg `,
  };

  return (
    <div>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={`${VarientStyle[props.varient]}`}
        ref={props.refer}
      ></input>
    </div>
  );
}
