import { decodeJWT } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
      const decoded = decodeJWT(token.value);
      if (!decoded) {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export function notFoundMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const validRoutes = [
    "/",
    "/auth/login",
    "/auth/register",
    "/mahasiswa",
    "/mahasiswa/a",
    "/mahasiswa/b",
    "/mahasiswa/c",
    "/jadwal",
    "/tugas",
    "/admin",
    "/admin/jadwal",
    "/admin/tugas",
    "/admin/mading/create",
    "/admin/mading/edit",
  ];

  if (!validRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  return NextResponse.next();
}
