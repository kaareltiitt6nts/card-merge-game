import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-neutral-200 rounded-md p-3 w-20 h-15 hover:bg-sky-100 hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
