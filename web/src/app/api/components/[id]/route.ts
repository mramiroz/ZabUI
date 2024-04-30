import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Component from "@/models/Component";

export async function GET (_: NextRequest, {params}: {params: {id: string}}){
    try{
        const component = await Component.findById(params.id);
        return NextResponse.json(component, {status: 200});
    }
    catch(err: any){
        return NextResponse.json({message: "Error fetching component", error: err.message}, {status: 500});
    }
}

export async function DELETE(_: NextRequest, {params}: {params: {id: string}}){
    try{
        const user = await Component.findByIdAndDelete(params.id);
        return NextResponse.json({message: "Component deleted"}, {status: 200});
    }
    catch(err: any){
        return NextResponse.json({message: "Error deleting component", error: err.message}, {status: 500});
    }
}