"use client";
import Card from '@/components/component/Card';
import { Button } from '@compui/comps';
import { useSession, signOut, getSession } from 'next-auth/react';
import { use, useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
interface ComponentData{
  _id: ObjectId;
  code: string;
  title: string;
  description: string;
  category: string;
  props: any;
  likes: number;
}
export default function Profile(){
  const { data: session} = useSession();
  const user = session?.user;
  const favComps = (user as any)?.favComps;
  const [comps, setComps] = useState<ComponentData[]>([]);

  useEffect(() => {
    fetch("/api/components/favComps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({compIds: favComps})
    }).then(async (res) => {
      const data = await res.json();
      setComps(data);
    });
  }, [favComps]);
  
  return (
    <>
      <p className='my-5 text-5xl text-center'>Hello {(user as any)?.username} 👋</p>
      <p className='my-3 text-3xl'>Here are your favorite components: </p>
      <div className='md:flex md:flex-wrap'>
        {comps.map((comp: ComponentData, index) => (
          <Card
            key={index}
            id={comp._id}
            code={comp.code}
            title={comp.title}
            description={comp.description}
            category={comp.category}
            props={comp.props}
            likes={comp.likes}
          />
        ))}
      </div>
      <Button onClick={() => signOut()}>
        Logout
      </Button>
    </>
  )
}
