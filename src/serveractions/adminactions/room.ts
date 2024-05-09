"use server";

import prisma from "@/prisma/setup";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const actionCreateRoom = async (formData: FormData) => {
  console.log("Creating the room server action");
  const categoryInput = formData.get("roomCategory");
  const floorInput = formData.get("floor");
  const rentInput = formData.get("rent");
  if (!categoryInput || !floorInput || !rentInput) return;

  const category = await prisma.roomCategory.findUnique({
    where: {
      categoryName: categoryInput as string,
    },
  });
  if (!category) throw Error("Category not found");

  const rooms = await prisma.room.findMany({
    where: {
      roomCategoryId: category.id,
    },
  });

  const key =
    category.categoryUnit.toString() +
    floorInput.toString() +
    (rooms.length + 1);

  const newRoom = await prisma.room.create({
    data: {
      roomCategoryId: category.id,
      unitNumber: rooms.length + 1,
      rent: parseInt(rentInput as string),
      roomKey: parseInt(key),
      floor: parseInt(floorInput as string),
    },
  });

  revalidatePath("/admin/rooms");
  redirect("/admin/rooms");
};
