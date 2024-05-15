import React from 'react';

export default function Bubble({text, image, width, height, color, link}){
    return (
        <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110">
            {link ? (
                    <a href={link} className="flex">
                        <p className='mx-2'>{text}</p>
                        <img src={image} alt="profile" width={width} height={width} />
                    </a>
            ) : (
                <>
                    <p className='mx-2'>{text}</p>
                    <a href={link} className="flex">
                        <img src={image} alt="profile" width={width} height={width} />
                    </a>
                </>
            )}
        </div>
    )
}