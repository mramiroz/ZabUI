import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export default function middleware(request: NextRequest){
  if (request.nextUrl.pathname.startsWith("/api")) {
    return request.nextUrl.pathname.startsWith("/api/auth") ? request : NextResponse.next(request);
  }
  if (request.nextUrl.pathname.startsWith("/profile")) {
    const session = getSession({ req: (request as any)?.NextRequest });
    if (!session) {
      return NextResponse.redirect("/login");
    }
  }
  return NextResponse.next(request);
}