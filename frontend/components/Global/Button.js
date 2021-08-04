import React from "react";

const Button = ({ text, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:opacity-70  rounded-lg p-2 px-5 ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
