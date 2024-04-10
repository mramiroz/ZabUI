"use client";
import { useState, useEffect, use } from 'react';
import Component from '@/models/Component';
import Card from '../components/component/card';


const Home = () => {

  const [components, setComponents] = useState([]);
  useEffect(() => {
    fetch('/api/components')
      .then(res => res.json())
      .then(data => setComponents(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="w-full">
      {Array.isArray(components) && components.map((item, index) => (
        <Card
          key={index}
          code={item.code}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Home;