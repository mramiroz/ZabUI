import React, { Children } from "react";

export default function Button({ width, height, backColor, borderColor, onClick, href, children}) {

  return (
    <button
        style={{backgroundColor: backColor, borderColor: borderColor}}
        className={`w-${width} h-${height} p-2 border rounded hover:shadow-lg transform 
                  transition-all duration-200 ease-in-out hover:scale-110`}
        onClick={onClick}>
     <a href={href}>{children}</a>
    </button>
  );
}