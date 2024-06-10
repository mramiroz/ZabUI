"use server";
import ComponentsProps from "@/models/ComponentsProps";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function updateCompProps({id, value}: {id: string, value: string}){
    try {
        await connectToDatabase();
        const newComponentProp = await ComponentsProps.findByIdAndUpdate(id, {value: value});
        let res = JSON.parse(JSON.stringify(newComponentProp));
        return res;
    }
    catch (err: any) {
        throw new Error(err);
    }
}