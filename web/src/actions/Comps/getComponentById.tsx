"use server";
import Component from "@/models/Component";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getComponentById({id}: {id: string}) {
  try{
    await connectToDatabase();
    const res = await Component.findById(id);
    return res.toJSON();
  }catch(error){
    console.error("Error retrieving component:", error);
    return {};
  }
}