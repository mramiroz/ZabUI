"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import getComponentById from '@/actions/Comps/getComponentById';
import ComponentCode from '@/components/component/ComponentCode';
import getComponentProps from '@/actions/Props/getCoponentProps';


interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  import: string;
}

export default function Show() {
  const param = useParams();
  const [component, setComponent] = useState<ComponentData | null>(null);
  const [componentProps, setComponentProps] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<any>({});
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string}) as ComponentData;
      setComponent(res);
      const props = await getComponentProps({componentId: res._id});
      setComponentProps(props);
    }
    fetchData();
  }, [param.id]);

  const handleInputChange = (props: any[], id: string, e: any) => {
    const newProps = props.map((prop) => {
      if (prop._id === id) {
        return {
          ...prop,
          value: e.target.value
        }
      }
      return prop;
    });
    setComponentProps(newProps);
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
      {component && (
        <>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h1 className='mb-4 text-4xl font-bold'>{component.title}</h1>
          <ComponentCode component={component} props={componentProps}/>
          <p className="mb-4 text-base">{component.description}</p>
        </div>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h2 className="mb-2 text-2xl font-semibold">Props:</h2>
          <ul className="list-inside">
          {componentProps && componentProps.map((prop, index) => {
              return (
                <div key={prop._id} className="flex flex-col mb-4 border-2 rounded-lg">
                  <li key={prop} className="p-2">
                    <div className="mb-2 text-base">
                      <strong>{prop.name}</strong>: {prop.description || "No description given"}
                    </div>
                    {prop.type === 'string' && (<input type="text" className="p-2 text-black border rounded-md" value={prop.value} onChange={(e) => handleInputChange(componentProps, prop._id, e)}/> )}
                    {prop.type === 'number' && (<input type="number" className="p-2 text-black border rounded-md" value={prop.value} onChange={(e) => handleInputChange(componentProps,prop._id, e)}/> )}
                    {prop.type === 'boolean' && (<input type="checkbox" className="p-2 text-black border rounded-md" value={prop.value} onChange={(e) => handleInputChange(componentProps,prop._id, e)}/> )}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        </>
      )}
    </div>
  );
}