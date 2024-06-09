"use server";
import ComponentsProps from "@/models/ComponentsProps";
import { connectToDatabase } from "@/lib/mongodb";

export default async function updateCompProps({id, value, componentId, propId}: {id: string, value: string, componentId: string, propId: string}){
    try {
        await connectToDatabase();
        const newComponentProp = await ComponentsProps.findByIdAndUpdate(id, {value, component: componentId, prop: propId}, {new: true});
        let res = JSON.parse(JSON.stringify(newComponentProp));
        return res;
    }
    catch (err: any) {
        throw new Error(err);
    }
}