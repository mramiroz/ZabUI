import Image from 'next/image'
import { useState } from 'react'

export default function Like({likes = 0}){
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(likes)
    const handleLike = () => {
        const newLike = !liked;
        setLiked(newLike);
        if (newLike){
            setLikesCount(likesCount + 1)
            fetch('/api/component/like', {
                method: 'POST',
                body: JSON.stringify({id: 1, compId: 1}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.error(err))
        } else {
            setLikesCount(likesCount - 1)
            fetch('/api/component/like', {
                method: 'DELETE',
                body: JSON.stringify({id: 1, compId: 1}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.error(err))
        }
    }
    return (
        <div className="flex items-center mt-4">
            <div 
                onClick={handleLike}
                className={`transition-all duration-200 ease-in-out transform ${liked ? 'scale-110' : 'scale-100'}`}
            >
                <Image src={liked ? "/like-fill.svg" : "/like.svg"} alt="like" width={30} height={30} className="mr-4 cursor-pointer" />
            </div>
            <span className='font-bold'>{likesCount}</span>
        </div>
    )
}