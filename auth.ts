import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/setup";
import { getUserById } from "./src/database/user";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      email: string | null;
      firstName: string | null;
      lastName: string | null;
      password: string | null;
      phone: string | null;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user && token.role) {
        session.user.id = token.sub;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.password = token.password as string;
        session.user.phone = token.phone as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.password = existingUser.password;
      token.phone = existingUser.phone;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
