import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="border-solid border-2 p-2 m-2 hover:bg-sky-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
