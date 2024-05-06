import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest){
  try{
      await connectToDatabase();
      const {id, compId} = await req.json();
      const user = await User.findById(id);
      const comp = await Component.findById(compId);
      if (!comp){
          return NextResponse.json({message: "Component not found"}, {status: 404});
      }
      if (!user){
          return NextResponse.json({message: "User not found"}, {status: 404});
      }
      if (!user.favComps.includes(compId)){
          return NextResponse.json({message: "Component not in favorites"}, {status: 400});
      }
      comp.likes -= 1;
      await comp.save();
      const index = user.favComps.indexOf(compId);
      user.favComps.splice(index, 1);
      await user.save();
      return NextResponse.json(user, {status: 200});
  } catch{
      return NextResponse.json({message: "Error removing component from favorites"}, {status: 500});
  }
}