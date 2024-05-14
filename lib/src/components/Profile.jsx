import React from 'react';

export default function Profile({ image, width, height, color, href }) {
    return (
        <div className="flex items-center">
            <a href={href}>
                <img src={image} alt="profile" width={width} height={width} 
                    className='mr-4 border-2 rounded-full cursor-pointer' style={{ borderColor: color }} />
            </a>
        </div>
    );
}
