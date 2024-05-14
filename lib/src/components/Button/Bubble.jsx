import Image from 'next/image';

export default function Bubble({text, image, width, height, color, link}){
    return (
        <>
            {link ? (
                <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110">
                    <a href={link} className="flex">
                        <p className='mx-2'>{text}</p>
                        <Image src={image} alt="profile" width={width} height={width} />
                    </a>
                </div>
            ) : (
                <div style={{backgroundColor: color, borderColor: color}} className="flex items-center p-2">
                    <p className='mx-2'>{text}</p>
                    <a href={link} className="flex">
                        <img src={image} alt="profile" width={width} height={width} />
                    </a>
                </div>
            )}
        </>
    )
}