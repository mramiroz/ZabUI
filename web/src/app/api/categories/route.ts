
import { NextResponse } from 'next/server';
import {connectToDatabase } from '@/lib/mongodb';
import Component from '@/models/Component';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const categories = await Component.distinct("category");
    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error fetching components", error: error.message }, { status: 500 });
  }
}