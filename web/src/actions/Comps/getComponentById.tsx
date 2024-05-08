"use server";
import Component from "@/models/Component";

export default async function getComponentById({id}: {id: string}) {
  const res = await Component.findById(id);
  return res.toObject();
}