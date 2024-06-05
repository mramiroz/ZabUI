"use client";
import getProps from '@/actions/Props/getProps';
import { useEffect, useState } from 'react';

interface PropsData {
  _id: string,
  name: string,
  description: string,
  type: string,
  required: boolean,
}


interface ComponentProps {
  componentId: string,
  propId: string,
  value: string,
}

export default function SelectProps() {
  const [selectedProps, setSelectedProps] = useState("");
  const [propsData, setPropsData] = useState<PropsData[]>([]);
  const [defaultValue, setDefaultValue] = useState({});

  useEffect(() => {
    const fetchProps = async () => {
      const props = await getProps();
      setPropsData(props);
    }
    fetchProps();
  }, [selectedProps]);

  const handleDefaultValueChange = (propId, event) => {
    setDefaultValue({ ...defaultValue, [propId]: event.target.value });
  }

  const handlePropSelect = (event) => {
    setSelectedProps(event.target.value);
  }

  return (
    <div>
      <select name="prop" className="px-4 py-2 mb-2 bg-gray-900 border rounded" onChange={handlePropSelect}>
        {propsData.map((prop, index) => (
          <option key={index} value={prop._id}>{prop.name}</option>
        ))}
      </select>
      {propsData.map((prop) => (
        prop._id === selectedProps && (
          <div key={prop._id}>
            <label className="text-sm font-bold">{prop.name}:   </label>
            <input type="text" id={prop._id} name={prop._id} className="p-2 text-black border rounded-md" value={defaultValue[prop._id] || ""} onChange={(e) => handleDefaultValueChange(prop._id, e)} />
          </div>
        )
      ))}
    </div>
  );
}