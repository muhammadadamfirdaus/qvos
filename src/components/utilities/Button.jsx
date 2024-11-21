import React from "react";

export default function Button({ children, bg, className }) {
  return (
    <>
      <button className={`default ${className ? className : null}`} style={{ backgroundColor: bg }}>
        {children}
      </button>
    </>
  );
}
