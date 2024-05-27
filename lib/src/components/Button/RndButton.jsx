import React from 'react';

export default function RndButton({ width, height, backColor, borderColor, onClick, href, children, textColor}) {

  return (
    <button className="flex items-center justify-between px-6 py-4 transition-transform duration-200 transform hover:scale-110" onClick={onClick}>
      <a
        href={href}
        className="inline-block p-3 mr-2 text-sm font-semibold transition-transform duration-200 transform rounded-full hover:scale-110"
        style={{backgroundColor: backColor, borderColor: borderColor, color: textColor}}>
        {children}
      </a>
    </button>
  );
}