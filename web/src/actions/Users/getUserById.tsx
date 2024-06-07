"use server";
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';

export default async function getUserById(id: string) {
    try{
        await connectToDatabase();
        const user = await User.findById(id);
        let res = JSON.parse(JSON.stringify(user));
        return res;
    }
    catch(error: any){
        throw new Error(error);
    }
}