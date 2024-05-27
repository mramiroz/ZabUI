import React from "react";

export default function Button({ width, height, backColor, borderColor, onClick, href, children, textColor}) {

  return (
    <button
        style={{backgroundColor: backColor, borderColor: borderColor, color: textColor}}
        className="p-2 font-bold transition-all duration-200 ease-in-out transform border-2 rounded hover:shadow-lg hover:scale-110"
        onClick={onClick}
        >
     <a href={href}>{children}</a>
    </button>
  );
}