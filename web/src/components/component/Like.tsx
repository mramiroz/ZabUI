"use client";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import removeLike from '@/actions/Like/removeLike';
import addLike from '@/actions/Like/addLike';
import getLikesAndUserLikeStatus from '@/actions/Like/getLikesAndUserLikeStatus';
import { redirect } from 'next/navigation';


export default function Like({compId}: {compId: string}){
    let { data: session} = useSession();
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const user = session?.user;
    const id = (user as any)?._id || (user as any)?.id;
    
    useEffect(() => {
        const fetchData = async () =>
        {
            if (!user) {
                return;
            }
            const { likesCount, userHasLiked } = await getLikesAndUserLikeStatus({compId, userId: id});
            setLikesCount(likesCount);
            setLiked(userHasLiked);
        }
        fetchData();
    },[session])
    
    const handleLike = async () => {
        if (liked) {
            removeLike({id: compId, userId: id});
            setLiked(false);
            setLikesCount(likesCount - 1);
        }
        else {
            addLike({id: compId, userId: id});
            setLiked(true);
            setLikesCount(likesCount + 1);
        }
    }

    return (
        <div className="flex items-center mt-4">
            <div 
                onClick={handleLike}
                className={`transition-all duration-200 ease-in-out transform ${liked ? 'scale-110' : 'scale-100'}`}
            >
                <Image 
                    src={liked ? "/like-fill.svg" : "/like.svg"} 
                    alt="like" width={30} height={30} 
                    className="mr-4 cursor-pointer" />
            </div>
            <span className='font-bold'>{likesCount}</span>
        </div>
    )
}