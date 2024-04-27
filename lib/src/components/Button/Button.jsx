import React, { Children } from "react";

export default function Button({ width, height, backColor, borderColor, onClick, href, children}) {

  return (
    <button
        style={{backgroundColor: backColor, borderColor: borderColor}}
        className={`w-${width} h-${height} p-2 border rounded hover:shadow-lg transform 
                  transition duration-500 ease-in-out hover:scale-110 active:scale-90`}
        onClick={onClick}>
     <a href={href}>{children}</a>
    </button>
  );
}