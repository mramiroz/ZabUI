"use client";
import Card from '@/components/component/Card';
import { Button } from '@zabui/comps';
import { useSession, signOut, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import getFavComps from '@/actions/Profile/getFavComps';

interface ComponentData{
  _id: string;
  title: string;
  description: string;
  import: string;
  component: string;
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
      <div className='flex flex-col m-10 space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
      <div className='w-full md:w-1/4' style={{ padding: '10px' }}>
        <div className='flex flex-col p-8 space-y-4'>
          <Button backColor="red" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
        </div>
        <div className='w-full mt-10 overflow-auto md:max-h-full' style={{ maxHeight: '90vh' }}>
        {Array.isArray(favComps) && favComps.map((comp: ComponentData, index) => {
          return (
            <Card
              key={index}
              id={(comp._id).toString()}
              title={comp.title}
              importComp={comp.import}
              description={comp.description}
              component={comp.component}
            />
          )
        })}
        </div>
      </div>
    </div>
  )
}
