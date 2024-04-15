import Image from 'next/image'

type ProfileProps = {
    image: string;
    width: number;
    height: number;
}
export default function Profile({image, width, height}: ProfileProps){
    return (
        <div className="flex items-center">
            <Image src={image} alt="profile" width={width} height={width} className="cursor-pointer mr-4 border-blue-700 border-2 rounded-full" />
        </div>
    )
}