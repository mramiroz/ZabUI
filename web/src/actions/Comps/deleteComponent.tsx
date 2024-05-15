"use server";
import Component from "@/models/Component";

export default async function deleteComponent({id}: {id: string}) {
  try{
    const res = await Component.findByIdAndDelete(id);
    return res;
  } catch (err: any) {
    console.error(err);
  }
}