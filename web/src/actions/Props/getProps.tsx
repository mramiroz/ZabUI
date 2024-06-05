"use server"

import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getProps(){
  await connectToDatabase();
  const res = await Props.find();
  const data = JSON.parse(JSON.stringify(res));
  return data;
}