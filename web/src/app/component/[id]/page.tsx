"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/Copy'
import * as Comps from '@zabui/comps';
import getComponentById from '@/actions/Comps/getComponentById';
import propsDataJSON from '@/lib/data/props.json';

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

const Show = () => {
  const param = useParams();
  const [component, setComponent] = useState<ComponentData | null>(null);
  const propsData : PropsData = JSON.parse(JSON.stringify(propsDataJSON));
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string});
      setComponent(res);
    }
    fetchData();
  }, [param.id]);
  const Component = component && Comps[component.component];
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {component && (
        <>
          <h1 className='mb-4 text-4xl font-bold'>{component.title}</h1>
          <div className="mb-4 component-content">
            <Component {...component.props} />
          </div>
          <p className="mb-4 text-base text-gray-200">{component.description}</p>
          <code className="mb-4 text-sm text-gray-200">
            <Copy code={component.import} showCode={true}/>
          </code>
          <h2 className="mb-2 text-2xl font-semibold">Props:</h2>
          <ul className="list-disc list-inside">
            {Object.entries(component.props).map(([prop, value]) => (
              <li key={prop} className="mb-1 text-base text-gray-200">
                <strong>{prop}: {propsData[prop]?.description || "No description given"}</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

}

export default Show;