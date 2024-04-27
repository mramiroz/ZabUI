"use client";
import { useState, useEffect, use } from 'react';
import Card from '@/components/component/Card';
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

const Home = () => {

  const [components, setComponents] = useState<ComponentData[]>([]);
  useEffect(() => {
    fetch('/api/components')
      .then(res => res.json())
      .then(data => setComponents(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="flex flex-wrap justify-center w-full">
      {Array.isArray(components) && components.map((item, index) => (
        <Card
          key={index}
          id={item._id}
          code={item.code}
          title={item.title}
          description={item.description}
          category={item.category}
          props={item.props}
          likes={item.likes}
        />
      ))}
    </div>
  );
};

export default Home;