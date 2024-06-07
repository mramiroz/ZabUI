"use server";

import Props from '@/models/Props';
import { connectToDatabase } from '@/lib/mongodb';

export default async function createProp({name, description, type, required}: {name: string, description: string, type: string, required: string | boolean}){
    await connectToDatabase();
    const prop = await Props.create({name, description, type, required});
    let res = JSON.parse(JSON.stringify(prop));
    return res;
}