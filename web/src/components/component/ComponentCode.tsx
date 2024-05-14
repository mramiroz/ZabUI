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

export default function ComponentCode({ component }: { component: any }) {
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
        <div className='flex'>
          <button className='w-1/5 px-4 py-2 bg-gray-900 rounded-t-md hover:bg-gray-950' onClick={handleComponentClick}>Show Component</button>
          <button className='w-1/5 px-4 py-2 bg-gray-900 rounded-t-md hover:bg-gray-950' onClick={handleCodeClick}>Show Code</button>
        </div>
        <div className='w-full p-10 mt-0 mb-8 bg-gray-900 rounded-b-lg' >
          <div className='flex justify-center m-4'> 
          {showComponent && component &&(
              <Component {...component.props}/>
            )}
          {showCode && component &&(
            <div className='block w-full'>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
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