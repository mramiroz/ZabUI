"use client";
import Copy from '../components/component/Copy';
import Bubble from '@/components/home/Bubble';
import Pricing from '@/components/example/Pricing';


const Home = () => {
  return (
    <div className="text-lg text-center">
      <section className="justify-center block m-4">
        <div className='flex justify-center m-12'>
          <h1 className='text-6xl'>Build UI in <br/> NextJS easily</h1>
        </div>
        <div className='flex justify-center'>
          <Bubble text="Github"image="/github-icon.svg" width={30} height={30} color="#071e26"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-4 m-4">
        <p className='my-4 max-w-prose'>CompUI is a library of NextJS components that can be used in your website you can custom your components, simply as installing a npm package</p>
        <Copy code="npm install @compui/comps" showCode={true}/>
      </section>
      <Pricing price="10€" text="Best product" features={["asd", "cositas"]} color="black" />
    </div>
  );
};

export default Home;