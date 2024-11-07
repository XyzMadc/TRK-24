import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { DefaultJWT } from "next-auth/jwt";

declare module "next" {
  interface NextApiRequest {
    user?: JWT;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    nim: string;
    role: "member" | "admin";
    typeClass: string;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      nim: string;
      role: "member" | "admin";
      typeClass: string;
    } & DefaultSession["member"];
  }

  interface User {
    id: string;
    nim: string;
    role: "member" | "admin";
    typeClass: string;
  }
}
