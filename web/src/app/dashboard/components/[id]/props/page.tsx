"use client";
import Component from "@/models/Component";
import ComponentsProps from "@/models/CoponentsProps";
import getComponentById from "@/actions/Comps/getComponentById";
import getComponentProps from "@/actions/Props/getCoponentProps";
import addComponentProp from "@/actions/Props/addComponentProp";
import Label from "@/components/dashboard/LabelComponentsProps";
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
}

export default function Props(){
  const [component, setComponent] = useState<ComponentData>();
  const [props, setProps] = useState<Props[]>();
  const [componentProps, setComponentProps] = useState<ComponentsProps[]>();
  const pathName = usePathname();
  const parts = pathName.split('/');
  const id = parts[3];

  useEffect(()=>{
    const fetchData = async () => {
        console.log(id);
        const res = await getComponentById({id: id as string});
        setComponent(res as ComponentData);
        console.log(res)
        const componentProps = await getComponentProps({componentId: id as string});
        setProps( componentProps as ComponentsProps[]);
        const allProps = await getProps();
        setProps(allProps as Props[]);
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await addComponentProp({componentId: id as string, propId: '', value: ''});
  }

  return (
    <div>
      <h1>{component?.title}</h1>
      <div className="flex justify-between">
        <h2>Add New Prop</h2>
        <form onSubmit={handleSubmit}>
          <select>
            {props && props.map((prop, index) => (
              <option key={index} value={prop._id}>{prop.name}</option>
            ))}
          </select>
          <input type="text"/>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="">
        {componentsProps && componentProps.map((prop, index) => (
          <div key={index} className="flex justify-between">
            <p>{prop.name}</p>
            <p>{prop.type}</p>
            {Array.isArray(prop) && prop.map((item, index) => (
              <Label key={index}  prop={item} />
            ))}
          </div>
        ))}
      </div>

      
    </div>
  )
}