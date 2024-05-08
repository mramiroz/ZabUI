"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/Copy'
import * as Comps from '@compui/comps';
import getComponentById from '@/actions/Comps/getComponentById';

interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  import: string;
  props: any;
}

const Show = () => {
  const param = useParams();

  const [component, setComponent] = useState<ComponentData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string});
      setComponent(res);
    }
    fetchData();
  }, [param.id]);

  const Component = component && Comps[component.title];

  return (
    <div className="flex flex-col items-center justify-center">
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
            {Object.entries(component.props).map(([prop, description]) => (
              <li key={prop} className="mb-1 text-base text-gray-200">
                <strong>{prop}:</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

}

export default Show;