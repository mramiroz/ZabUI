"use client";
import { useState, useEffect, use } from 'react';
import Card from '../components/component/card';
import Copy from '../components/component/copy';
import Bubble from '@/components/home/Bubble';


const Home = () => {

  return (
    <div className="text-center text-lg">
      <section className="block justify-center m-4">
        <div className='flex justify-center m-12'>
          <h1 className='text-6xl'>Build UI in <br/> NextJS easily</h1>
        </div>
        <div className='flex justify-center'>
          <Bubble text="Github"image="/github-icon.svg" width={30} height={30} color="#071e26"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center m-4 p-4">
        <p className='max-w-prose'>CompUI is a library of NextJS components that can be used in your website you can custom your components, simply has installing a npm package</p>
        <Copy code="npm install @compui/comps" showCode={true}/>
      </section>
    </div>
  );
};

export default Home;