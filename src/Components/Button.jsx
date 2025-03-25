import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="border-solid bg-neutral-200 border-2 rounded-md p-3 m-2 w-20 h-15 hover:bg-sky-100 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
