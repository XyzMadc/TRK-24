import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/init";
import { compare } from "bcryptjs";
import { UserData } from "@/types/type";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nim: { label: "NIM", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.nim || !credentials?.password) return null;

        try {
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("nim", "==", credentials.nim));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) return null;

          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data() as UserData;

          const isValid = await compare(
            credentials.password,
            userData.password
          );

          if (isValid) {
            return {
              id: userData.id,
              name: userData.name,
              nim: userData.nim,
              role: userData.role,
              typeClass: userData.typeClass,
            };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.nim = user.nim;
        token.role = user.role;
        token.typeClass = user.typeClass;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.nim = token.nim as string;
        session.user.role = token.role as "member" | "admin";
        session.user.typeClass = token.typeClass as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
