"use client";
import { useState, useEffect, use } from 'react';
import Card from '../components/component/card';
import Copy from '../components/component/copy';


const Home = () => {

  return (
    <div className="text-center text-lg">
      <h1>CompUI is a library of NextJS components that can be used in your website you can custom your components, simply has installing a npm package</h1>
      <Copy code="npm install @compui/comps" showCode={true}/>
    </div>
  );
};

export default Home;