"use server";
import { ObjectId } from "mongodb";
import User from "@/models/User";
import Component from "@/models/Component";
import { connectToDatabase } from "@/lib/mongodb";

export default async function addLike({id, userId}: {id: string, userId: ObjectId}) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);
    const comp = await Component.findById(id);
    if (!comp) {
      throw new Error("Component not found");
    }
    if (!user) {
      throw new Error("User not found");
    }
    if (user.favComps.includes(id)) {
      throw new Error("Component already in favorites");
    }
    comp.likes += 1;
    await comp.save();
    user.favComps.push(id);
    await user.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
}