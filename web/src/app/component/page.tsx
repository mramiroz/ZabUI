"use client"
import Card from '@/components/component/Card';
import getComponents from '@/actions/Comps/getComponents';
import { useState, useEffect } from 'react';

interface Component {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  props: string;
  likes: number;
}

export default function Home(){
  const [page, setPage] = useState(1);
  const [components, setComponents] = useState<Component[]>([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const newComponents = await getComponents(page, 5);
      setComponents(newComponents);
    };
    fetchComponents();
  }, [page]);

  const isLastPage = components.length < 5;
  return (
    <div>
      {Array.isArray(components) && components.map((item: Component, index) => (
        <Card
          key={index}
          id={item._id.toString()}
          code={item.code}
          title={item.title}
          description={item.description}
          component={item.component}
        />
      ))}
      <div className="flex justify-center mt-4">
        <button 
          className={`font-bold py-2 px-4 rounded ${page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button 
          className={`font-bold py-2 px-4 rounded ml-4 ${isLastPage ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}