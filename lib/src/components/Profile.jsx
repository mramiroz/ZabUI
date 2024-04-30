import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Profile({ image, width, height, color, href }) {
    return (
        <div className="flex items-center">
            <Link href="/profile">
                <Image src={image} alt="profile" width={width} height={width} 
                className="mr-4 border-2 rounded-full cursor-pointer" style={{borderColor:color}} />
            </Link>
        </div>
    );
}
