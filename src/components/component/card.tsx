import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import React from 'react';
import Link from 'next/link';
import Copy from './copy';
import * as Comps from '@compui/comps';
import { ObjectId } from 'mongodb';

interface CardProps {
  id: string;
  code: string;
  title: string;
  description: string;  
  category: string;
  props: any;
}

const Card: React.FC<CardProps> = ({ id,  code, title, description, category, props}) => {
  const Component = Comps[category];
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 flex flex-col justify-between">
      <div>
        <Component {...props}/>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <Link href={`/component/${id}`} className="inline-block bg-blue-500 rounded-full p-3 p-1 text-sm font-semibold text-gray-700 mr-2">
          Read more
        </Link>
        <Copy code={code} showCode={false}/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;