"use client";
import Copy from '../components/component/Copy';
import { Bubble } from '@zabui/comps';
import getFavComponents from '@/actions/Comps/getFavComponents';
import { useEffect, useState } from 'react';
import Card from '@/components/component/Card';
import {ProfileStatus} from '@zabui/comps';

interface Component {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  import: string;
  likes: number;
}

export default function Home(){
  const [components, setComponents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getFavComponents();
      setComponents(res as any);
    }
    fetchData();
  }, []);

  return (
    <div className="text-lg text-center">
      <section className="justify-center block m-4">
        <div className='flex justify-center m-12'>
          <h1 className='text-6xl'>Build UI in <br/> ReactJs easily</h1>
        </div>
        <div className='flex justify-center'>
          <Bubble link='https://github.com/mramiroz/ZabUI.git' text="Github"image="/github-icon.svg" width={30} height={30} color="#071e26"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-4 m-4">
        <p className='my-4 max-w-prose'>ZabUI is a library of ReactJS components that can be used in your website, simply as installing a npm package</p>
        <Copy text="npm install @zabui/comps" showCode={true}/>
      </section>
      <div className="flex justify-center flex-col mt-10">
        <h2 className="text-2xl">Most valorated components</h2>
        <div className="flex flex-wrap justify-center">
          {Array.isArray(components) && components.map((item: Component, index) => (
          <Card
            key={index}
            id={item._id.toString()}
            importComp={item.import}
            title={item.title}
            description={item.description}
            component={item.component}
            likes={item.likes}
          />
          ))}
        </div>
      </div>
      <div>
        <ProfileStatus image="/profile.jpg" width={5} height={5} status="online" borderColor={undefined} href={undefined} alt={undefined} />
      </div>
    </div>
  );
};
