"use server";
import Component from "@/models/Component";
import User from "@/models/User";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getFavComps({id}: {id: ObjectId}) {
  try {
    await connectToDatabase();
    const user = await User.findById(id);
    if (!user) {
      return { message: "User not found", status: 404 };
    }
    const favComps = user.favComps;
    if (!favComps || favComps.length === 0) {
      return { message: "No favorite components found", status: 404 };
    }
    const comps = await Component.find({ _id: { $in: favComps } });
    if (!comps) {
      return { message: "No components found", status: 404 };
    }

    return comps.map((comp) => {
      const obj = comp.toObject();
      obj._id = obj._id.toString();
      return obj;
    });
  } catch (error) {
    console.error("An error occurred while fetching favorite components:", error);
    throw error;
  }
}