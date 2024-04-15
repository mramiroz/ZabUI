"use client";
import { useState, useEffect, use } from 'react';
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
      <h1>Libreria de componentes</h1>
      <code>
        npm install @compui/comps
      </code>
    </div>
  );
};

export default Home;