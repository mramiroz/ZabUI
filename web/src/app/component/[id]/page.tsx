"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/copy'
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
    <div>
      {component && (
        <>
          <Component {...component.props} />
          <h1>{component.title}</h1>
          <p>{component.description}</p>
          <code>
            <Copy code={component.import} showCode={true}/>
          </code>
          <h2>Props:</h2>
          <ul>
            {Object.entries(component.props).map(([prop, description]) => (
              <li key={prop}>
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