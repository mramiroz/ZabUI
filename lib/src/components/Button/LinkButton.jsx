import React from 'react';

export default function LinkButton({ href, text, color, onClick }) {
  if (!color) color = "#1a202c";
  return (
    <a href={href} className={`text-${color}-500 hover:text-${color}-700 m-4 transform hover:scale-110`}>
        <button onClick={onClick}>
          {text}
        </button>
    </a>
  );
}