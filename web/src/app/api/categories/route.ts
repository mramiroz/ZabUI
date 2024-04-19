
import { NextResponse } from 'next/server';
import {connectToDatabase } from '@/lib/mongodb';


export async function POST(request: Request) {
  try {
    const db = await connectToDatabase();
    const body = await request.json();
    const resultl = await db.collection("Components").insertOne(body);
    return NextResponse.json({ message: "Component created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating component" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase();
    const categories = await db.collection("Components").distinct("category");
    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error fetching components", error: error.message }, { status: 500 });
  }
}