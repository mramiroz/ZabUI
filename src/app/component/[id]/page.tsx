"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/copy'

interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
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

  return (
    <div>
      {component && (
        <>
          <h1>{component.title}</h1>
          <p>{component.description}</p>
          <code>
            <Copy code={component.import} showCode={true}/>
          </code>
        </>
      )}
    </div>
  );

}

export default Show;