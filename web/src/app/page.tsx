import Copy from '../components/component/Copy';
import { Bubble } from '@zabui/comps';


export default function Home(){
  return (
    <div className="text-lg text-center">
      <section className="justify-center block m-4">
        <div className='flex justify-center m-12'>
          <h1 className='text-6xl'>Build UI in <br/> ReactJs easily</h1>
        </div>
        <div className='flex justify-center'>
          <Bubble link='https://github.com/mramiroz/ZabUI.git' text="Github"image="/github-icon.svg" width={30} height={30} color="#071e26"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-4 m-4">
        <p className='my-4 max-w-prose'>ZabUI is a library of ReactJS components that can be used in your website, simply as installing a npm package</p>
        <Copy text="npm install @zabui/comps" showCode={true}/>
      </section>
    </div>
  );
};
