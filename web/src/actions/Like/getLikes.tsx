"use server";
import Component from "@/models/Component";
import User from "@/models/User";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getLikes({compId}: {compId: string}) {
    await connectToDatabase();
    const CompIdO = new ObjectId(compId);
    const component = await Component.findById(CompIdO);
    if (!component) {
      throw new Error("Component not found");
    }

    return { likesCount: component.likes};
}