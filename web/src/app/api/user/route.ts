
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/User";

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

export async function POST(request: Request) {
    try{
        const db = await connectToDatabase();
        const body = await request.json();

        if (!body.username || !body.password || !body.email) {
            return NextResponse.json({message: "Missing required fields"}, {status: 400});
        }
        const user = new User({
            username: body.username,
            password: body.password,
            email: body.email
        });
        await user.save();
        return NextResponse.json({message: "Component created"}, {status: 201});
    }
    catch(error){
        return NextResponse.json({message: "Error creating component"}, {status: 500});
    }
}