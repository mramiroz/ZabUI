import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest){
  try{
      await connectToDatabase();
      const {id, compId} = await req.json();
      const user = await User.findById(id);
      if (!user){
          return NextResponse.json({message: "User not found"}, {status: 404});
      }
      if (!user.favComps.includes(compId)){
          return NextResponse.json({message: "Component not in favorites"}, {status: 400});
      }
      const index = user.favComps.indexOf(compId);
      user.favComps.splice(index, 1);
      await user.save();
      return NextResponse.json({message: "Component removed from favorites"}, {status: 200});
  } catch{
      return NextResponse.json({message: "Error removing component from favorites"}, {status: 500});
  }
}