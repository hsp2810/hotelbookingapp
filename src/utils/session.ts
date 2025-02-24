import { auth } from "@/auth";

export const getSession = async () => {
  const session = await auth();
  if (!session) return null;
  return session.user;
};
