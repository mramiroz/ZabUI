"use server";
import Component from "@/models/Component";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function getComponentById({id}: {id: string}) {
  try{
    await connectToDatabase();
    const res = await Component.findById({_id: new ObjectId(id)});
    const simplifiedRes = {
      _id: res._id.toString(),
      title: res.title,
      description: res.description,
      category: res.category,
      code: res.code,
      props: res.props,
      likes: res.likes,
      import: res.import,
      component: res.component
    };
    return simplifiedRes;
  }
  catch(error){
    console.error("Error retrieving component:", error);
    return {};
  }
}