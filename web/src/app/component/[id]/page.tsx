"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/Copy'
import * as Comps from '@zabui/comps';
import getComponentById from '@/actions/Comps/getComponentById';
import propsDataJSON from '@/lib/data/props.json';
import ComponentCode from '@/components/component/ComponentCode';

interface PropsData{
  [key: string]: {
    description: string;
    type: string;
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
  const propsData : PropsData = JSON.parse(JSON.stringify(propsDataJSON));
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string});
      setComponent(res as ComponentData);
    }
    fetchData();
  }, [param.id]);

  return (
    <div className="flex flex-col items-center justify-center m-4 space-y-4">
      {component && (
        <div className="w-full max-w-md p-4 rounded shadow">
          <h1 className='mb-4 text-4xl font-bold'>{component.title}</h1>
          <ComponentCode component={component}/>
          <p className="mb-4 text-base">{component.description}</p>
          <h2 className="mb-2 text-2xl font-semibold">Props:</h2>
          <ul className="list-disc list-inside">
                      {Object.entries(component.props).map(([prop, value]) => (
                        <li key={prop} className="mb-1 text-base">
                          <strong>{prop}</strong>: {propsData[prop]?.description || "No description given"}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );

}
