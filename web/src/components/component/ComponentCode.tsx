"use client";
import { useState } from 'react';
import { Copy } from '@zabui/comps';
import * as Comps from '@zabui/comps';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  import: string;
  props: any;
}

export default function ComponentCode({ component, props }: { component: any , props: any}) {
  const [showCode, setShowCode] = useState(false);
  const [showComponent, setShowComponent] = useState(true);

  const handleComponentClick = () =>{
    setShowCode(false)
    setShowComponent(true)
  }

  const handleCodeClick = () =>{
    setShowCode(true)
    setShowComponent(false)
  }

  const Component = component && Comps[component.component]

  return (
    <div className='w-full'>
        <div className='flex flex-wrap'>
          <button className='px-4 py-2 bg-gray-900 border-2 border-b-0 rounded-t-md hover:bg-gray-950' onClick={handleComponentClick}>Show Component</button>
          <button className='px-4 py-2 bg-gray-900 border-2 border-b-0 sm:rounded-t-md hover:bg-gray-950' onClick={handleCodeClick}>Show Code</button>
        </div>
        <div className='w-full p-10 mt-0 mb-8 bg-gray-900 border-2 rounded-b-lg' >
          <div className='flex flex-col items-center justify-center m-4 sm:flex-row'> 
          {showComponent && component &&(
              <Component {...props}/>
            )}
          {showCode && component &&(
            <div className='w-full overflow-auto sm:w-auto md:w-auto lg:w-auto'>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="w-full rounded-lg">
                {component.code}
              </SyntaxHighlighter>
              <Copy text={component.code} />
            </div>
          )}
          </div>
      </div>
    </div>
  )
}