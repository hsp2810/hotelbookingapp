"use server";

import { signIn } from "@/auth";
import prisma from "@/prisma/setup";
import { getUserByEmail } from "@/src/database/user";
import { saltAndHashPassword } from "@/src/utils/password";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const actionLogin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log("Email and Passowrd: ", email, password);

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };

        case "AccessDenied":
          return { error: "Access Denied!" };

        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }

  return;
};

export const actionRegister = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;
  console.log("Password: ", password);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "User already exists. Try a different email." };
  }

  const hashedPassword = await saltAndHashPassword(password);
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      phone,
      password: hashedPassword,
    },
  });
  if (!newUser) {
    return { error: "Error in registering the user. Please try again later" };
  }

  redirect("/login");
};
