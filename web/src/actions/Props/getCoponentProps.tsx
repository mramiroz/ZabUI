"use server";

import ComponentsProps from "@/models/ComponentsProps";
import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function getComponentProps({componentId}: {componentId: string}) {
  try {
    await connectToDatabase();
    const relations = await ComponentsProps.find({component: new ObjectId(componentId)})
    if (!relations) return [];
    const props = await Promise.all(relations.map(async (relation) => {
        const prop = await Props.findById(relation.prop);
        if (!prop) return;
        const plainProp = prop.toObject();
        return { ...plainProp, value: relation.value };
    }));
    const data = JSON.parse(JSON.stringify(props));
    return data;
  } catch (error) {
    console.error('Error getting component props:', error);
  }
}