import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const publicRoutes = ["/auth/login", "/auth/register", "/auth/error"];
const validRoutes = ["/", "/admin", "/mahasiswa", "/tugas", "/jadwal", "/404"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Check for user profile route
  if (pathname.startsWith("/user/")) {
    const userSlug = token.name.toLowerCase().replace(/\s+/g, "-");
    const requestedSlug = pathname.split("/")[2];

    if (requestedSlug !== userSlug) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    return NextResponse.next();
  }

  // Check if route is valid
  const isValidRoute = validRoutes.some((route) => pathname.startsWith(route));
  if (!isValidRoute) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
