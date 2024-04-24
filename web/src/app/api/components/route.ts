
import { NextRequest, NextResponse } from 'next/server';
import {connectToDatabase } from '@/lib/mongodb';


export async function POST(request: NextRequest) {
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
    const components = await db.collection("Components").find().toArray();
    return NextResponse.json(components, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error fetching components", error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const db = await connectToDatabase();
    const result = await db.collection("Components").deleteMany({});
    return NextResponse.json({ message: "Component deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting component" }, { status: 500 });
  }
}