"use server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { ObjectId } from "mongodb";

export default async function deleteUser({id}: {id: string}) {
  await connectToDatabase();
  const del = await User.findByIdAndDelete(new ObjectId(id));
  let res = JSON.parse(JSON.stringify(del));
  return res;
}