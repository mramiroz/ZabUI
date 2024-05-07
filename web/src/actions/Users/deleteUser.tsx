"use server";
import User from "@/models/User";
import { ObjectId } from "mongodb";

export default async function deleteUser({id}: {id: string}) {
  console.log(id);
  const user = await User.findById(new ObjectId(id));
  console.log(user);
  if (!user) {
    return {message: "User not found", status: 404};
  }
  await user.deleteOne();
  return {message: "User deleted", status: 200};
}