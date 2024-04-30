import Image from 'next/image';
import Link from 'next/link';

export default function Bubble({text, image, width, height, color, link}){
    return (
        <>
            {link ? (
                <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110">
                    <Link href={link} className="flex">
                        <p className='mx-2'>{text}</p>
                        <Image src={image} alt="profile" width={width} height={width} />
                    </Link>
                </div>
            ) : (
                <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2">
                    <p className='mx-2'>{text}</p>
                    <Image src={image} alt="profile" width={width} height={width} />
                </div>
            )}
        </>
    )
}