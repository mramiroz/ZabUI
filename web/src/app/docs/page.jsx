"use client";
import { Copy } from '@zabui/comps'

export default function Docs(){
  return (
    <div className="p-8">
      <h1 className="mb-4 text-4xl font-bold">Docs</h1>
      <h2 className="mb-2 text-3xl font-semibold">Index</h2>
      <ul className="pl-5 mb-4 list-disc">
        <li><a href="/docs/1" className="hover:underline">Page 1</a></li>
        <li><a href="/docs/2" className="hover:underline">Page 2</a></li>
        <li><a href="/docs/3" className="hover:underline">Page 3</a></li>
      </ul>
      <h2 className="mb-2 text-3xl font-semibold">Getting Started</h2>
      <h3 className="mb-1 text-2xl font-semibold">Instalation</h3>
      <p className="mb-2">Install the library with npm with this command</p>
      <Copy text="npm install @zabui/comps" showCode="true" backColor="" textColor="white"/>
      <p className="mb-2">or with yarn</p>
      <Copy text="yarn add @zabui/comps" showCode="true" />
      <h3 className="mb-1 text-2xl font-semibold">Usage</h3>
      <p className="mb-2">Import the components you want to use in your project</p>
      <Copy text="import { Button } from '@zabui/comps'" showCode="true" />
      <p className="mb-2">Then use the components in your project</p>
      <Copy text="<Button>Click me</Button>" showCode="true" />
      <h3 className="mb-1 text-2xl font-semibold">Customization</h3>
      <p className="mb-2">You can customize the components with props</p>
      <Copy text="<Button color='red'>Click me</Button>" showCode="true" />
      
    </div>
  )
}