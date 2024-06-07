"use server";
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';

export default async function updateUser({id, name, email, password, role}: {id: string, name: string, email: string, password: string, role: string}) {
    try {
        await connectToDatabase();
        const user = await User.findByIdAndUpdate(id, { name, email, password, role }, { new: true });
        let res = JSON.parse(JSON.stringify(user));
        return res;
    }
    catch (error: any) {
        throw new Error(error);
    }
}