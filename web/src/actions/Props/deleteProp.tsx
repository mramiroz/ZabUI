"use server";
import Props from '@/models/Props';
import { connectToDatabase } from '@/lib/mongodb';

export default async function deleteProp(id: string) {
  await connectToDatabase();
  const res = await Props.findByIdAndDelete(id);
  return res;
}