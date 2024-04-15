import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET (_: NextRequest, {params}: {params: {id: string}}){
    try {
        const db = await connectToDatabase();
        const component = await db.collection("Components").findOne({ _id: new ObjectId(params.id)});
        if (component) {
            return NextResponse.json(component, { status: 200 });
        }
        return NextResponse.json({ message: "Component not found" }, { status: 404 });
    }
    catch (error: any) {
        return NextResponse.json({ message: "Error fetching component", error: error.message }, { status: 500 });
    }
}