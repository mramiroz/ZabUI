"use server";
import Component from "@/models/Component";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getComponents(page: number, limit: number){
    await connectToDatabase();
    const res = await Component.find().skip((page - 1) * limit).limit(limit);
    const simpleRes = JSON.parse(JSON.stringify(res));
    return simpleRes;
}