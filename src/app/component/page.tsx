"use client";
import { useState, useEffect, use } from 'react';
import Card from '../../components/component/card';


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
          id={item._id}
          code={item.code}
          title={item.title}
          description={item.description}
          category={item.category}
          props={item.props}
        />
      ))}
    </div>
  );
};

export default Home;