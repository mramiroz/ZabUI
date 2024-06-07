"use client";
import Component from "@/models/Component";
import ComponentsProps from "@/models/ComponentsProps";
import getComponentById from "@/actions/Comps/getComponentById";
import getComponentProps from "@/actions/Props/getCoponentProps";
import addComponentProp from "@/actions/Props/addComponentProp";
import deleteComponentProp from "@/actions/Props/deleteComponentProp";
import Label from "@/components/dashboard/LabelComponentsProps";
import {Button} from "@zabui/comps";
import getProps from "@/actions/Props/getProps";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ComponentData {
  _id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  props: string;
  component: string;
}
interface Props {
  _id: string;
  name: string;
  type: string;
  input: boolean;
  required: boolean;
}

interface ComponentsProps {
  _id: string;
  component: string;
  prop: string;
  value: string;
}

export default function Props(){
  const [component, setComponent] = useState<ComponentData>();
  const [props, setProps] = useState<Props[]>();
  const [componentProps, setComponentProps] = useState<ComponentsProps[]>();
  const [selectedProps, setSelectedProps] = useState<Props>();
  const [inputValue, setInputValue] = useState<string | number | boolean>('');
  const pathName = usePathname();
  const parts = pathName.split('/');
  const id = parts[3];

  useEffect(()=>{
    const fetchData = async () => {
        const res = await getComponentById({id: id as string});
        const componentProps = await getComponentProps({componentId: id as string});
        const allProps = await getProps();
        setComponent(res as ComponentData);
        setComponentProps( componentProps as ComponentsProps[]);
        setProps(allProps as Props[]);
    }
    fetchData();
  }, [id]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await addComponentProp({componentId: id as string, propId: selectedProps?._id as string, value: inputValue as string});
    if (res){
      const componentProps = await getComponentProps({componentId: id as string});
      setComponentProps( componentProps as ComponentsProps[]);
    }
  }

  const handlePropSelected = (e: any) => {
    const prop = props?.find(prop => prop._id === e.target.value);
    setSelectedProps(prop as Props);
  }

  const handleDelete = async (compId: string, propId: string) => {
    const res = await deleteComponentProp(compId, propId);
    if(res){
      const componentProps = await getComponentProps({componentId: id as string});
      setComponentProps( componentProps as ComponentsProps[]);
    }
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{component?.title}</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Add New Prop</h2>
        <div>
          <Button href="/dashboard/props/create">Create New Prop</Button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 flex-wrap">
          <select className="bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0" onChange={handlePropSelected}>
            {props && props.map((prop, index) => (
              <option key={index} value={prop._id}>{prop.name}</option>
            ))}
          </select>
          {selectedProps?.required && selectedProps?.type === 'string' && <input type="text" className="bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0" onChange={handleInputChange}/>}
          {selectedProps?.required && selectedProps?.type === 'number' && <input type="number" className="bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0" onChange={handleInputChange}/>}
          {selectedProps?.required && selectedProps?.type === 'boolean' && <input type="checkbox" className="bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0" onChange={handleInputChange}/>}
          <Button type="submit">Add Prop</Button>
        </form>
      </div>
      <div className="mt-4">
        {componentProps && componentProps.map((prop, index) => (
          <Label key={index} prop={prop} onDelete={() => handleDelete(component?._id as string, prop._id)}/>
        ))}
      </div>
    </div>
  )
}