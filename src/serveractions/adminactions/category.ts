"use server";

import prisma from "@/prisma/setup";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const actionCreateCategory = async (formData: FormData) => {
  const categoryName = formData.get("categoryName");
  const priceStart = formData.get("priceStart");
  const priceEnd = formData.get("priceEnd");
  const floors = formData.get("floors");

  if (!categoryName || !priceStart || !priceEnd || !floors) return;

  const category = await prisma.roomCategory.findUnique({
    where: {
      categoryName: categoryName as string,
    },
  });
  if (category) throw Error("Category with the same name already exists");

  const categories = await prisma.roomCategory.findMany();

  let floorsArray: number[] = [];
  if (floors === "firstFloorSlot") {
    floorsArray = [1, 2, 3, 4];
  } else if (floors === "secondFloorSlot") {
    floorsArray = [5, 6, 7, 8];
  } else {
    floorsArray = [9, 10];
  }

  console.log(categoryName, priceStart, priceEnd, floors);

  await prisma.roomCategory.create({
    data: {
      categoryName: categoryName as string,
      categoryUnit: categories.length + 1,
      priceStart: parseInt(priceStart as string),
      priceEnd: parseInt(priceEnd as string),
      floors: floorsArray,
    },
  });

  revalidatePath("/admin/categories");
  redirect("/admin/categories");
};
