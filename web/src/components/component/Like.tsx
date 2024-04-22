import Image from 'next/image'
import { useState } from 'react'

export default function Like({likes = 0}){
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(likes)
    const handleLike = () => {
        setLiked(!liked)
        setLikesCount(liked ? likesCount - 1 : likesCount + 1)
    }
    return (
        <div className="flex items-center mt-4">
            <div 
                onClick={handleLike}
                className={`transition-all duration-200 ease-in-out transform ${liked ? 'scale-110' : 'scale-100'}`}
            >
                <Image src={liked ? "/like-fill.svg" : "/like.svg"} alt="like" width={30} height={30} className="cursor-pointer mr-4" />
            </div>
            <span className='font-bold'>{likes}</span>
        </div>
    )
}