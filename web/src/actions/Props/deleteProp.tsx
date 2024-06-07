"use server";
import Props from '@/models/Props';
import { connectToDatabase } from '@/lib/mongodb';

export default async function deleteProp(id: string) {
  await connectToDatabase();
  const del = await Props.findByIdAndDelete(id);
  let res = JSON.parse(JSON.stringify(del));
  return res;
}