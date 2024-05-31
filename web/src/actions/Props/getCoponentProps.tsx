"use server";

import ComponentsProps from "@/models/ComponentsProps";
import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getComponentProps({componentId}: {componentId: string}) {
  await connectToDatabase();
  const relations = await ComponentsProps.find({componentId});
  if (!relations) {
    throw new Error("Component not found");
  }
  const props = await Promise.all(relations.map(async (relation) => {
      const prop = await Props.findById(relation.propId);
      return { ...prop._doc, value: relation.value };
  }));
  return props;
}