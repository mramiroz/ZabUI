import { NextRequest, NextResponse } from 'next/server';
import User from "@/models/User";
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(req: NextRequest){
    try {
        await connectToDatabase();
        const {id, compId} = await req.json();
        const user = await User.findById(id);
        if (!user){
            return NextResponse.json({message: "User not found"}, {status: 404});
        }
        if (user.favComps.includes(compId)){
            return NextResponse.json({message: "Component already in favorites"}, {status: 400});
        }
        user.favComps.push(compId);
        await user.save();
        return NextResponse.json({message: "Component added to favorites"}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({message: "Error adding component to favorites"}, {status: 500});
    }
}

