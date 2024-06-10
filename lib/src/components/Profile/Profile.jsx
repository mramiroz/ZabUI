import React from 'react';

export default function Profile({ image, width, height, borderColor, href, alt }) {
    if (!width) width = 3;
    if (!height) height = 3;
    return (
        <div className="flex items-center">
            <a href={href} className='cursor-pointer'>
                <img src={image} alt={alt} style={{borderColor: borderColor, width: `${width}rem`, height: `${height}rem`, objectFit: 'cover'}}
                    className='mr-4 border-2 rounded-full cursor-pointer'/>
            </a>
        </div>
    );
}
