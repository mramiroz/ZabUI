"use server";
import Component from "@/models/Component";

export default async function getCategories() {
  const categories = await Component.distinct('category');
  return categories;
}