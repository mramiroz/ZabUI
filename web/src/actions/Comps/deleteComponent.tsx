"use server";
import Component from "@/models/Component";
import ComponentsProps from "@/models/ComponentsProps";

export default async function deleteComponent({id}: {id: string}) {
  try{
    let res = await Component.findByIdAndDelete(id);
    let rem = await ComponentsProps.deleteMany({component: id})
    res = JSON.parse(JSON.stringify(res));
    return res;
  } catch (err: any) {
    console.error(err);
  }
}