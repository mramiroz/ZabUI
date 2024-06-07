"use server";
import { connectToDatabase } from "@/lib/mongodb";
import Prop from "@/models/Props";

export default async function getPropById({ id }: { id: string }) {
    try {
        await connectToDatabase();
        const prop = await Prop.findById(id);
        let res = JSON.parse(JSON.stringify(prop));
        return res;
    } catch (error: any) {
        throw new Error(error);
    }
}
