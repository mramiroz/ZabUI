"use client";
import Card from '@/components/component/Card';
import { Button } from '@zabui/comps';
import { useSession, signOut, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import getFavComps from '@/actions/Profile/getFavComps';

interface ComponentData{
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  props: any;
  likes: number;
}
export default function Profile(){
  const { data: session, status } = useSession();
  const user = session?.user;
  const [favComps, setFavComps] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user){
        return;
      }
      const favComps = await getFavComps({id: (user as any)?._id});
      if (!favComps) {
        return;
      }
      setFavComps(favComps as any);
    }
    fetchData();
  }, [status])

  
  return (
    <div className='m-10'>
      <p className='my-5 text-5xl text-center'>Hello {(user as any)?.name} 👋</p>
      <p className='my-3 text-3xl text-center'>Here are your favorite components: </p>
      <div>
        {Array.isArray(favComps) && favComps.map((comp: ComponentData, index) => {
          return (
            <Card
              key={index}
              id={(comp._id).toString()}
              code={comp.code}
              title={comp.title}
              description={comp.description}
              component={comp.component}
              category={comp.category}
              props={comp.props}
              likes={comp.likes} />
          )
        })}
      </div>
      <Button onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  )
}
