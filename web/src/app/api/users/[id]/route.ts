import User from '@/models/User'
import { NextResponse } from 'next/server';


export async function GET(_: NextResponse,  {params}: {params: {id: string}}){
  try{
    const user = await User.findById(params.id);
    return NextResponse.json(user, {status: 200});
  }
  catch(err: any){
    return NextResponse.json({message: "Error fetching user", error: err.message}, {status: 500});
  }
}

export async function DELETE(_: NextResponse, {params}: {params: {id: string}}){
  try{
    const user = await User.findByIdAndDelete(params.id);
    return NextResponse.json({message: "User deleted"}, {status: 200});
  }
  catch(err: any){
    return NextResponse.json({message: "Error deleting user", error: err.message}, {status: 500});
  }
}

export async function PUT(request: NextResponse, {params}: {params: {id: string}}){
  try{
    const body = await request.json();
    const user  = await User.findByIdAndUpdate(params.id, body, {new: true});
    return NextResponse.json(user, {status: 200});
  }
  catch(err: any){
    return NextResponse.json({message: "Error updating user", error: err.message}, {status: 500});
  }
}
