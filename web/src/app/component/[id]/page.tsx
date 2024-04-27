"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/Copy'
import * as Comps from '@compui/comps';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = param.id;

    if (id) {
      fetch(`/api/components/${id}`)
        .then(res => res.json())
        .then(data => {
          setComponent(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [param.id]);

  if (loading) {
    return <div>Loading...</div>;
  }
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