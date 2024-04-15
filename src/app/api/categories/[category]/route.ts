import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET (_: NextRequest, {params}: {params: {id: string, category: string}}){
    try {
        const db = await connectToDatabase();
        const components = await db.collection("Components").find({ category: params.category }).toArray();
        if (components.length > 0) {
            return NextResponse.json(components, { status: 200 });
        }
        return NextResponse.json({ message: "No components found in this category" }, { status: 404 });
    }
    catch (error: any) {
        return NextResponse.json({ message: "Error fetching components", error: error.message }, { status: 500 });
    }
}