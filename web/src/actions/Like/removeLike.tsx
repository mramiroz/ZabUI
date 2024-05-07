"use server"; 
import { ObjectId } from "mongodb";
import User from "@/models/User";
import Component from "@/models/Component";

export default async function removeLike({id, userId}: {id: string, userId: ObjectId}) {
  const user = await User.findById(userId);
  const comp  = await Component.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  if (!comp) {
    throw new Error("Component not found");
  }
  if (!user.favComps.includes(id)) {
    throw new Error("Component not in favorites");
  }
  comp.likes -= 1;
  await comp.save();
  user.favComps.pull(id);
  await user.save();
}