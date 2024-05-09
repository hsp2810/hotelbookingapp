import bcrypt, { genSalt } from "bcryptjs";

export const saltAndHashPassword = async (plainText: string) => {
  const salt = await genSalt(10);
  return await bcrypt.hash(plainText, salt);
};

export const comparePasswords = async (
  plainText: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainText, hashedPassword);
};
