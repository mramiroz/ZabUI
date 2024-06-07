"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Prop from "@/models/Props";


export default async function updateProp({ id, name, description, type, required }: { id: string, name: string, description: string, type: string, required: boolean }) {
    try {
        await connectToDatabase();
        const prop = await Prop.findByIdAndUpdate(id, { name, description, type, required }, { new: true });
        let res = JSON.parse(JSON.stringify(prop));
        return res;
    }
    catch (error: any) {
        throw new Error(error);
    }
}