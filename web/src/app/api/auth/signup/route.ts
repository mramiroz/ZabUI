import {NextResponse, NextRequest} from "next/server";
import {connectToDatabase} from "@/lib/mongodb";
import User from "@/models/User";

interface UserProps {
    username: string;
    email: string;
    password: string;
}

export async function POST (req: NextRequest) {
    try{
        const db = await connectToDatabase();
        const {username, email, password}: UserProps = await req.json();
        const searchUser = await User.findOne({username});
        if (searchUser) return NextResponse.json({message: "Username already exists"}, {status: 400});
        const searchEmail = await User.findOne({email});
        if (searchEmail) return NextResponse.json({message: "Email already exists"}, {status: 400});
        const user = new User({username, email, password});
        await user.save();
        return NextResponse.json({message: "User created"}, {status: 200});
    } catch(error: any){
        return NextResponse.json({message: "Error connecting to database", error: error.message}, {status: 500});
    }
}