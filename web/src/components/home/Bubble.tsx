import Image from 'next/image';

type BubbleProps = {
    text: string;
    image: string;
    width: number;
    height: number;
    color: string;
    link?: string;
}
export default function Bubble({text, image, width, height, color, link}: BubbleProps){
    return (
        <div style={{backgroundColor: color, borderColor: color}} className={`flex items-center rounded-lg p-2`}>
            {link ? (
                <a href={link}>
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