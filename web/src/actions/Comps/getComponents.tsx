"use server";
import Component from "@/models/Component";

export default async function getComponents(){
    const res = await Component.find();
    return res;
}