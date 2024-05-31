"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import getComponentById from '@/actions/Comps/getComponentById';
import ComponentCode from '@/components/component/ComponentCode';
import getComponentProps from '@/actions/Props/getCoponentProps';

interface PropsData{
  [key: string]: {
    description: string;
    type: string;
    input: boolean;
  }
}

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

export default function Show() {
  const param = useParams();
  const [component, setComponent] = useState<ComponentData | null>(null);
  const [propsValues, setPropsValues] = useState<{[key: string]: string}>({});
  const propsData = {} as PropsData;
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string}) as ComponentData;
      setComponent(res);
      const props = await getComponentProps({componentId: res._id});
    }
    fetchData();
  }, [param.id]);

  const handleInputChange = (prop: string, e: any) => {
    setPropsValues({...propsValues, [prop]: e.target.value});
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
      {component && (
        <>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h1 className='mb-4 text-4xl font-bold'>{component.title}</h1>
          <ComponentCode component={component} props={propsValues}/>
          <p className="mb-4 text-base">{component.description}</p>
        </div>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h2 className="mb-2 text-2xl font-semibold">Props:</h2>
          <ul className="list-inside">
          { component.props && (
              Object.entries(component.props).map(([prop, value]) => (
              <li key={prop} className="p-2 mb-4 border rounded">
                <div className="mb-2 text-base">
                  <strong>{prop}</strong>: {propsData[prop]?.description || "No description given"}
                </div>
                <div>
                  {propsData[prop]?.input ===true && (
                      <input 
                        type="text"
                        value={propsValues[prop]} 
                        onChange={(e) => handleInputChange(prop, e)} 
                        className='w-full p-2 text-black border rounded-md'
                      />
                  )}
                </div>
              </li>
              ))
            )}
          </ul>
        </div>
        </>
      )}
    </div>
  );
}