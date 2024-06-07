"use server";

import ComponentsProps from "@/models/ComponentsProps";
import { connectToDatabase } from '@/lib/mongodb';

export default async function deleteComponentProp(compId: string, propId: string) {
  await connectToDatabase();
  const componentProps = await ComponentsProps.deleteOne({ component: compId, prop: propId });
  let res = JSON.parse(JSON.stringify(componentProps));
  return res;
}