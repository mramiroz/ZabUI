import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  try{
    const body = await request.json();
    const user = await User.findOne({id: body.id});
    if (!user){
      return NextResponse.json({message: "User not found"}, {status: 404});
    }
    user.addFavComp(body.compId);
    return NextResponse.json({message: "Component added to favorites"}, {status: 200});
  } catch (error){
    return NextResponse.json({message: "Error fetching user"}, {status: 500});
  }
}