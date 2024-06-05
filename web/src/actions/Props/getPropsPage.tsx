"use server";

import Props from "@/models/Props";
import { connectToDatabase } from "@/lib/mongodb";


export default async function getPropsPage(page: number, limit: number) {
  await connectToDatabase();
  const res = await Props.find().skip((page - 1) * limit).limit(limit);
  const data = JSON.parse(JSON.stringify(res));
  return data;
}