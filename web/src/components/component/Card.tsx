"use client";
import React from 'react';
import Link from 'next/link';
import Like from '@/components/component/Like';
import { Copy } from '@zabui/comps';
import * as Comp from '@zabui/comps';
import getComponentProps from '@/actions/Props/getCoponentProps';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  id: string;
  importComp: string;
  title: string;
  description: string;  
  component: string;
  likes: number;
}

const Card = ({ id, importComp, title, description, component, likes}: CardProps) => {
  const [props, setProps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const Component = Comp[component as keyof typeof Comp];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getComponentProps({componentId: id});
        setProps(res || []);
      } catch (error) {
        console.error('Error loading component:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const propsObject = props.reduce((obj:any, prop:any) => {
    obj[prop.name] = prop.value;
    return obj;
  }, {});

  return (
    <div 
      ref={ref} 
      className={`
        bg-gray-900/80 border border-gray-700 
        rounded-xl overflow-hidden w-full max-w-lg
        transform transition-all duration-300 m-4
        my-8
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:scale-105 hover:shadow-xl hover:border-gray-500
      `}
    >
      <div className="bg-gray-800/80 p-6">
        <div className='flex justify-center items-center min-h-[150px]'>
          {isLoading ? (
            <div className="animate-pulse bg-gray-700 w-full h-[150px] rounded-lg"/>
          ) : Component ? (
            <Component {...propsObject} />
          ) : (
            <div className="text-gray-400">Component not available</div>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <Like compId={id.toString()} likes={likes}/>
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-600">
          <Link 
            href={`/component/${id}`} 
            className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md
              hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </Link>
          <Copy text={importComp} showCode={false}/>
        </div>
      </div>
    </div>
  );
};

export default Card;