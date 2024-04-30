import Image from 'next/image';
import React from 'react';

export default function Profile({ image, width, height, color }) {
    return (
        <div className="flex items-center">
            <Image src={image} alt="profile" width={width} height={width} 
            className="mr-4 border-2 rounded-full cursor-pointer" style={{borderColor:color}} />
        </div>
    );
}
