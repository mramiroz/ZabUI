import User from '@/models/User';
import { NextResponse } from 'next/server';


export async function GET(){
  try {
    const users = await User.find();
    return NextResponse.json(users, {status: 200});
  }
  catch(err: any){
    return NextResponse.json({message: "Error fetching users", error: err.message}, {status: 500});
  }
}