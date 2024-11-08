import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      nim: string;
      role: "member" | "admin";
      typeClass: string;
    };
  }

  interface User {
    id: string;
    name: string;
    nim: string;
    role: "member" | "admin";
    typeClass: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    nim: string;
    role: "member" | "admin";
    typeClass: string;
  }
}
