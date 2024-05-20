"use server";
import Component from "@/models/Component";

export default async function getComponents(page: number, limit: number){
    const res = await Component.find().skip((page - 1) * limit).limit(limit);
    const simpleRes = JSON.parse(JSON.stringify(res));
    return simpleRes;
}