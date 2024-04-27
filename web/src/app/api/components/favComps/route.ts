import { connectToDatabase } from "@/lib/mongodb";
import Component from "@/models/Component";
import User from "@/models/User";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const db = await connectToDatabase();
    const body = await request.json();
    const favComps = await Component.find({ _id: { $in: body.compIds } });
    return NextResponse.json(favComps, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}
