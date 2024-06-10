import React from 'react';

export default function ProfileStatus({ image, width, height, borderColor, href, alt, status }) {
    if (!width) width = 3;
    if (!height) height = 3;
    let statusColor;

    switch (status) {
        case 'online':
            statusColor = 'bg-green-500';
            break;
        case 'offline':
            statusColor = 'bg-red-500';
            break;
        default:
            statusColor = 'bg-yellow-500';
            break;
    }
    let statusHeight = height / 4;
    let statusWidth = width / 4;
        
    return (
        <div className="flex items-center">
            <a href={href} className='relative cursor-pointer'>
                <img    src={image} alt={alt} style={{borderColor: borderColor, width: `${width}rem`, height: `${height}rem`, objectFit: 'cover'}}
                        className='mr-4 border-2 rounded-full cursor-pointer'/>
                <span   className={`absolute bottom-0 right-5 rounded-full border-2 ${statusColor} animate-pulse`} 
                        style={{width: `${statusWidth}rem`, height: `${statusHeight}rem`, borderColor:borderColor, animation: 'pulse 2s infinite'}}></span>
            </a>
        </div>
    );
}
