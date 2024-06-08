import React from "react";

export default function Button({ width, height, backColor, borderColor, onClick, href, children, textColor, type}) {
  if (!backColor) backColor = "#1a202c";
  if (!textColor) textColor = "white";
  if (!borderColor) borderColor = "transparent";
  if (!type) type = "button";

  return (
    <a href={href}>
    <button
        style={{backgroundColor: backColor, borderColor: borderColor, color: textColor, width: width + `rem`, height: height + `rem`}}
        className="p-2 font-bold transition-all duration-200 ease-in-out transform border-2 rounded hover:shadow-lg hover:scale-110"
        onClick={onClick}
        type={type}
        >
        {children}
    </button>
    </a>
  );
}