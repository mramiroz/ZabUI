import client from "@/lib/mysql";
import next, { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextApiResponse){
    const user = await client.execute('SELECT * FROM user')
    return NextResponse.json(user, { status: 200 });
}