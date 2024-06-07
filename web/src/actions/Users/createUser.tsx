"use server";

import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export default async function createUser({name, email, password, role}: {name: string, email: string, password: string, role: string}) {
    try {        
        await connectToDatabase();
        const newUser = new User({
            name,
            email,
            password,
            role
        });
        let res = await newUser.save();
        res = JSON.parse(JSON.stringify(res));
        return res;
    } catch (error : any) {
        throw new Error(error);
    }
}