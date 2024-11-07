// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { doc, getDoc } from "firebase/firestore";
import { compare } from "bcryptjs";
import { db } from "@/lib/firebase/init";

if (!process.env.NEXTAUTH_URL) {
  console.warn("Please set NEXTAUTH_URL environment variable");
}

if (!process.env.NEXTAUTH_SECRET) {
  console.warn("Please set NEXTAUTH_SECRET environment variable");
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nim: { label: "NIM", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.nim || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        try {
          const userDoc = await getDoc(doc(db, "users", credentials.nim));

          if (!userDoc.exists()) {
            throw new Error("User not found");
          }

          const user = userDoc.data();

          const isValid = await compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Invalid password");
          }

          return {
            id: userDoc.id,
            name: user.name,
            nim: user.nim,
            role: user.role,
            typeClass: user.typeClass,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.nim = user.nim;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role === "member" || token.role === "admin") {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
