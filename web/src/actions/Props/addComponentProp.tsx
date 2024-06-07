"use server";
import Component from "@/models/Component";
import ComponentsProps from "@/models/ComponentsProps";
import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";

export default async function addComponentProp({componentId,  propId,  value}: {componentId: string, propId: string, value: string}) {
  await connectToDatabase();

  const component = await Component.findById(componentId);
  const prop = await Props.findById(propId);
  const newComponentProp = new ComponentsProps({
    component,
    prop,
    value
  });
  await newComponentProp.save();
  let res = JSON.parse(JSON.stringify(newComponentProp));
  return res;
}
