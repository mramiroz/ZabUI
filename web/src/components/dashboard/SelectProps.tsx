"use client";
import { useState } from 'react';
import propsDataJSON from '@/lib/data/props.json';

interface PropsData {
  [key: string]: {
    description: string;
    type: string;
  }
}

const propsData : PropsData = JSON.parse(JSON.stringify(propsDataJSON));

export default function SelectProps() {
  const [selectedProps, setSelectedProps] = useState<{[key: string]: any}>({});

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedProps[e.target.value]) {
      setSelectedProps({...selectedProps, [e.target.value]: ""});
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      const {[e.target.name]: _, ...rest} = selectedProps;
      setSelectedProps(rest);
    } else {
      setSelectedProps({...selectedProps, [e.target.name]: e.target.value});
    }
  }

  return (
    <div>
      <select name="prop" className="px-4 py-2 mb-2 bg-gray-900 border rounded" onChange={handleSelect}>
        {Object.keys(propsData).map((prop, index) => (
          <option key={index} value={prop}>{prop}</option>
        ))}
      </select>
      {Object.entries(selectedProps).map(([prop, value]) => (
        <div key={prop} className="flex flex-col mb-4">
          <label className="mb-2 text-sm font-bold text-blue-500">{prop} (Prop):</label>
          {propsData[prop].type === 'number' && <input type="number" name={prop} placeholder="Props Value" value={value} onChange={handleInputChange} className='p-2 text-black border rounded-md'/>}
          {propsData[prop].type === 'string' && <input type="text" name={prop} placeholder="Props Value" value={value} onChange={handleInputChange} className='p-2 text-black border rounded-md'/>}
          {propsData[prop].type === 'boolean' && <select name={prop} value={value} onChange={handleInputChange as any} className='p-2 text-black border rounded-md'>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>}
        </div>
      ))}
    </div>
  );
}