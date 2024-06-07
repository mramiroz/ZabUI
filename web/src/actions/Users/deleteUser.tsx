"use server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { ObjectId } from "mongodb";

export default async function deleteUser({id}: {id: string}) {
  await connectToDatabase();
  console.log(id);
  const user = await User.findByIdAndDelete(new ObjectId(id));
  if (!user) {
    return {message: "User not found", status: 404};
  }
  return {message: "User deleted", status: 200};
}