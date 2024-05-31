import React from 'react';

export default function Bubble({text, image, width, height, borderColor, backColor, textColor, link}){
    if (!backColor) backColor = "#1a202c";
    if (!textColor) textColor = "white";
    if (!borderColor) borderColor = "transparent";
    if (!width) width = 24;
    if (!height) height = 24;
    return (
        <div    style={{backgroundColor: backColor, borderColor: borderColor, color: textColor}} 
                className="flex items-center justify-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110">
            {link ? (
                    <a href={link} className="flex">
                        <p className='mx-2'>{text}</p>
                        <img src={image} alt="profile" width={width} height={height} />
                    </a>
            ) : (
                <>
                    <p className='mx-2'>{text}</p>
                    <a href={link} className="flex">
                        <img src={image} alt="profile" width={width} height={height} />
                    </a>
                </>
            )}
        </div>
    )
}