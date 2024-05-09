import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./src/database/user";
import { comparePasswords } from "./src/utils/password";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const existingUser = await getUserByEmail(credentials.email as string);
        if (!existingUser) {
          throw new Error("User not found");
        }

        const passwordMatch = await comparePasswords(
          credentials.password as string,
          existingUser.password
        );

        if (!passwordMatch) {
          throw new Error("Wrong Credentials");
        }
        return existingUser;
      },
    }),
  ],
} satisfies NextAuthConfig;
