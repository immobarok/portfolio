// components/Button.js
import React from "react";

const Button = ({ children, onClick, className = "", disabled = false, size = "medium" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold transition-all ease-linear duration-300 ${getSizeClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;