"use server";
import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";

export default async function getCategories() {
  try {
    await connectToDatabase();
    const categories = await Component.find().distinct('category');
    return categories;
  } catch (error: any) {
    return error;
  }
}