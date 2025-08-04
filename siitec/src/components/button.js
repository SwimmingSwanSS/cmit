import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#B87333] hover:bg-[#a35f2b] text-white px-6 py-2 rounded-full shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
