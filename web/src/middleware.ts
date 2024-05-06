import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const session = token?.user as any;
  const path = req.nextUrl.pathname;

  const publicRoutes = ["/profile"];
  const adminRoutes = ["/dashboard", "/api/users"];
  const componentRoutes = ["/api/components/asd"];

  const isPublicRoute = publicRoutes.includes(path);
  const isAdminRoute = adminRoutes.some(route => path.startsWith(route));
  const isComponentRoute = componentRoutes.some(route => path.startsWith(route));

  if (!session && (isPublicRoute || isAdminRoute || isComponentRoute)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  } else if (session?.role === "user" && (isAdminRoute || isComponentRoute)) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/api/:path*'],
};