"use client";
import Card from '@/components/component/card';
import { Button } from '@compui/comps';
import { useSession, signOut, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
interface ComponentData{
  _id: ObjectId;
  code: string;
  title: string;
  description: string;
  category: string;
  props: any;
}
export default function Profile(){
  const { data: session, status } = useSession();
  const user = session?.user;

  useEffect(() => {
    if(status === 'unauthenticated'){
      window.location.href = '/login';
    }
  }
  , [status]);
  const [comps, setComps] = useState([]);
  useEffect(() => {
    fetch('/api/components')
      .then(res => res.json())
      .then(data => setComps(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <p className='text-5xl text-center my-5'>Hello {user?.username} 👋</p>
      <p className='text-3xl my-3'>Here are your favorite components: </p>
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
          />
        ))}
      </div>
      <Button text="Logout" onClick={() => signOut()} />

    </>
  )
}
