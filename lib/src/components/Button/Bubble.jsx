import Image from 'next/image';

export default function Bubble({text, image, width, height, color, link}){
    return (
        <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2 rounded-lg">
            {link ? (
                <a href={link} className='flex'>
                    <p className='mx-2'>{text}</p>
                    <Image src={image} alt="profile" width={width} height={width} />
                </a>
            ) : (
                <>
                    <p className='mx-2'>{text}</p>
                    <Image src={image} alt="profile" width={width} height={width} />
                </>
            )}
        </div>
    )
}