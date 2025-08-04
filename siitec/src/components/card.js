import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-xl shadow-md bg-white text-black ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
