import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';

export default function Like({compId}: {compId: ObjectId}){
    const { data: session } = useSession();
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const user = session?.user;
    const id = (user as any)?._id;
    
    const handleLike = async () => {
        const newLike = !liked;
        setLiked(newLike);
        if (newLike){
            setLikesCount(likesCount + 1);
            await fetch('/api/favComps/like', {
                method: 'PUT',
                body: JSON.stringify({id, compId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else{
            setLikesCount(likesCount - 1);
            await fetch('/api/favComps/unlike', {
                method: 'PUT',
                body: JSON.stringify({id, compId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
    
    useEffect(() => {
        if (session) {
            const user = session?.user;
            const id = (user as any)?._id;
            const toString = compId.toString();
            if ((user as any).favComps?.includes(toString)){
                setLiked(true);
            } else {
                setLiked(false);
            }
        }
    }, [session]);

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