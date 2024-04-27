import { useSession } from 'next-auth/react'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import { useState } from 'react'
import Component from '@/models/Component'

export default function Like({compId}: {compId: ObjectId}){
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const user = useSession().data?.user;
    const id = user?._id;
    const handleLike = () => {
        const newLike = !liked;
        setLiked(newLike);
        if (newLike){
            setLikesCount(likesCount + 1)
            fetch('/api/components/like', {
                method: 'PUT',
                body: JSON.stringify({id: id, compId: compId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.error(err))
        } else {
            setLikesCount(likesCount - 1)
            fetch('/api/components/like', {
                method: 'DELETE',
                body: JSON.stringify({id: id, compId: compId}),
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