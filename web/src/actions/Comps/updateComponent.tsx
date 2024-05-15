"use server";
import ComponentModel from "@/models/Component";
import { ObjectId } from "mongodb";

export default async function updateComponent(
  {id, title, description, category, code, props, likes, component}:
  {id: string,  title: string, description: string, category: string, code: string, props: string, likes: string, component: string} 
)
{
  const existingComponent = await ComponentModel.findOne({ _id: new ObjectId(id) });
  if (!existingComponent) {
    return {error: "Component does not exist"};
  }
  const res = await ComponentModel.findByIdAndUpdate(id, {title, description, category, code, props, component});
  return res.toJSON();
}