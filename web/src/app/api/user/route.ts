
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";

interface UserProps {
    username: string;
    email: string;
    password: string;
}
export async function GET(request: Request) {
    try{
        const db = await connectToDatabase();
        const categories = await db.collection("Components").distinct("category");
        return NextResponse.json(categories, {status: 200});
    }
    catch(error: any){
        return NextResponse.json({message: "Error fetching components", error: error.message}, {status: 500});
    }
}

export const POST = async (req: NextRequest) => {
    try{
        const db = await connectToDatabase();
        const {username, email, password}: UserProps = await req.json();
        const user = new User({username, email, password});
        await user.save();
        return NextResponse.json({message: "User created"}, {status: 200});
    } catch(error: any){
        return NextResponse.json({message: "Error connecting to database", error: error.message}, {status: 500});
    }
}