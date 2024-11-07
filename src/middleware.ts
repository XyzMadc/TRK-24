// middleware.ts
import { doc, getDoc } from "firebase/firestore";
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { db } from "./lib/firebase/init";
import { formatUrls } from "./utils/formatUrls";

const onlyAdmin = ["admin"];
const authPage = ["auth"];
const publicPaths = ["auth/login", "auth/register", "forgot-password"];

export function middleware(req: NextRequest, next: NextFetchEvent) {
  return WithAuth(mainMiddleware, ["admin", "user"])(req, next);
}

const mainMiddleware: NextMiddleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // For dynamic user profile routes
  if (path.match(/^\/[^/]+$/)) {
    if (token) {
      const requestedUsername = formatUrls(decodeURIComponent(path.slice(1)));

      // Get the document from Firestore to check if user exists
      try {
        const userDoc = await getDoc(doc(db, "users", requestedUsername));
        if (userDoc.exists()) {
          return NextResponse.next(); // User exists, allow access
        }
      } catch (error) {
        console.error("Error checking user:", error);
      }

      // If user doesn't exist in database, redirect to 404
      return NextResponse.redirect(new URL("/404", req.url));
    }
    return NextResponse.next();
  }

  // Allow access to public paths
  if (publicPaths.some((p) => path.startsWith(`/${p}`))) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
};

function WithAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split("/")[1];

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if (token) {
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|assets).*)"],
};
