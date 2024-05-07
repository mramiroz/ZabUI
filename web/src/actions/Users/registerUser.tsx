"use server";
import User from "@/models/User";

export default async function registerUser({name, email, password}: {name: string, email: string, password: string}) {
    const existingName = await User.findOne({name});
    if (existingName) {
        return {error: "Name already exists"};
    }
    const existingEmail = await User.findOne({email});
    if (existingEmail) {
        return {error: "Email already exists"};
    }
    const user = await User.create({name, email, password});
    user.save();
    return user;
}