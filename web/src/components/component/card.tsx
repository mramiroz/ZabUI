import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { ObjectId } from 'mongodb';
import React from 'react';
import Link from 'next/link';
import Like from '@/components/component/Like';
import Copy from './copy';
import * as Comp from '@compui/comps';

interface CardProps {
  id: ObjectId;
  code: string;
  title: string;
  description: string;  
  category: string;
  props: any;
}

const Card = ({ id,  code, title, description, category, props}: CardProps) => {
  const Component = Comp[title];
  return (
    <div className="rounded shadow-lg m-4 flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className='flex justify-center p-10'>
        <Component {...props}/>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <Link href={`/component/${id}`} className="inline-block bg-blue-500 rounded-full p-3 text-sm font-semibold text-gray-700 mr-2">
          Details
        </Link>
        <Copy code={code} showCode={false}/>
      </div>
      <div className="flex justify-between px-6 py-4">
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center mt-4">
         <Like />
        </div>
      </div>
    </div>
  );
};

export default Card;