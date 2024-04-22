import React from "react";

export default function Button({ text, width, height, backColor, borderColor, onClick, href}) {

  return (
    <button
        style={{backgroundColor: backColor, borderColor: borderColor}}
        className={`${width} ${height} p-2 border rounded hover:shadow-lg`}
        onClick={onClick}>
     <a href={href}>{text}</a>
    </button>
  );
}