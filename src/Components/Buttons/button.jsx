import React from "react";

const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden
        bg-white
        border-2
        border-transparent
        bg-linear-to-r from-white to-gray-50
        hover:from-gray-50 hover:to-gray-100
        text-indigo-700
        font-semibold
        rounded-lg
        shadow-md
        hover:shadow-lg
        transform
        hover:scale-105
        active:scale-95
        transition-all
        duration-300
        ease-out
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
        
        /* Gradient border using pseudo-element */
        before:absolute before:inset-0 before:rounded-lg before:p-0.5
        before:bg-linear-to-r before:from-indigo-600 before:to-emerald-400
        before:-z-10
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
