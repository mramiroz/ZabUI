import React from "react";

export default function Button({ width, height, backColor, borderColor, onClick, href, children, textColor}) {
  if (!backColor) backColor = "#1a202c";
  if (!textColor) textColor = "white";
  if (!borderColor) borderColor = "transparent";
  if (!width) width = 24;
  if (!height) height = 24;

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