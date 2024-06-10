import React from 'react'
export default function SuccessMsg({text, height, textColor, backColor}) {
    if (!height) height = 3
    return (
        <div className="flex items-center p-2 w-full animate-fade-down rounded-md" style={{height: `${height}rem`, backgroundColor: backColor}}>
            <svg className="h-full mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke={textColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-lg font-bold" style={{textColor: textColor}}>{text}</p>
        </div>
    )
}