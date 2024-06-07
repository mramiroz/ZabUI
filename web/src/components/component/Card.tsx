"use client";
import React, { use } from 'react';
import Link from 'next/link';
import Like from '@/components/component/Like';
import { Copy } from '@zabui/comps';
import * as Comp from '@zabui/comps';
import getComponentProps from '@/actions/Props/getCoponentProps';
import { useEffect, useState } from 'react';
import { useInView} from 'react-intersection-observer';

interface CardProps {
  id: string;
  importComp: string;
  title: string;
  description: string;  
  component: string;
}

const Card = ({ id,  importComp, title, description, component}: CardProps) => {
  const [props, setProps] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentProps({componentId: id});
      setProps(res);
    }
    fetchData();
  }, [id]);


  const Component = Comp[component];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const propsObject = props.reduce((obj:any, prop:any) => {
    obj[prop.name] = prop.value;
    return obj;
  }, {});

  return (
    <div ref={ref} className={`p-4 m-10 rounded-lg shadow-lg ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className='flex justify-center'>
        {Component && <Component {...propsObject}/> }
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <Link href={`/component/${id}`} className="inline-block p-3 mr-2 text-sm font-semibold text-gray-700 bg-blue-500 rounded-full">
          Details
        </Link>
        <Copy text={importComp} showCode={false}/>
      </div>
      <div className="flex justify-between px-6 py-4">
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-base text-gray-200">{description}</p>
        </div>
        <div className="flex items-center mt-4">
         <Like compId={id.toString()}/>
        </div>
      </div>
    </div>
  );
};

export default Card;