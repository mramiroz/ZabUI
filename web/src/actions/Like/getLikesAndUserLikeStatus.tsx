"use server";
import Component from "@/models/Component";
import User from "@/models/User";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getUserLikeStatus({compId, userId}: {compId: string, userId: string}) {
    await connectToDatabase();
    const CompIdO = new ObjectId(compId);
    const component = await Component.findById(CompIdO);
    if (!component) {
      throw new Error("Component not found");
    }

    const user = await User.findById(new ObjectId(userId));
    if (!user) {
      throw new Error("User not found");
    }

    const userHasLiked = user.favComps.includes(compId);

    return { userHasLiked };
}