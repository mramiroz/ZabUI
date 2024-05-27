"use server";
import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";


export default async function getComponentsCategory(category: string,  limit: number = 5, page: number = 1) {
  try {
    await connectToDatabase();
    const components = await Component.find({ category }).skip((page - 1) * limit).limit(limit);
    if (!components) {
      return [];
    }
    return components.map((component) => {
      const obj = component.toObject();
      obj._id = obj._id.toString();
      return obj;
    });
  } catch (error) {
    console.error("Error retrieving components:", error);
    return [];
  }
}