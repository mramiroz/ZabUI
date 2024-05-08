"use server";
import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";


export default async function getComponentsCategory(category: string) {
  await connectToDatabase();
  const components = await Component.find({category: category});
  if (!components) {
    return [];
  }
  return components.map(component => {
    const obj = component.toObject();
    obj._id = obj._id.toString();
    return obj;
  })
}