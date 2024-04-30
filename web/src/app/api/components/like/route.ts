import { NextRequest, NextResponse } from 'next/server';
import User from "@/models/User";
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(request: NextRequest){
  try{
    await connectToDatabase();
    const body = await request.json();
    const id = new ObjectId(body.id);
    const user = await User.findOne({_id: id});
    if (!user){
      return NextResponse.json({message: "User not found"}, {status: 404});
    }
    user.removeFavComp(body.compId);
    return NextResponse.json({message: "Component removed from favorites"}, {status: 200});
  }
  catch (error){
    return NextResponse.json({message: "Error fetching user"}, {status: 500});
  }
}

export async function PUT(request: NextRequest){
  try{
    await connectToDatabase();
    const body = await request.json();
    const user = await User.findOne({_id: body.id});
    if (!user){
      return NextResponse.json({message: "User not found"}, {status: 404});
    }
    user.addFavComp(body.compId);
    return NextResponse.json({message: "Component added to favorites"}, {status: 201});
  }
  catch (error){
    return NextResponse.json({message: "Error fetching user"}, {status: 500});
  }
}