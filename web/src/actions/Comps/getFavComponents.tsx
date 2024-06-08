"use server";
import Component from "@/models/Component";
import { connectToDatabase } from "@/lib/mongodb";

export default async function getFavComponents(){
    try {
        await connectToDatabase();
        const components = await Component.find().sort({likes: -1}).limit(3);
        let res = JSON.parse(JSON.stringify(components));
        return res;
    }
    catch (err: any) {
        throw new Error(err);
    }
}