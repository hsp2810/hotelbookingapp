"use server";

import prisma from "@/prisma/setup";

export const actionBookRoom = async (formData: FormData) => {
  try {
    const fName = formData.get("firstName");
    const lName = formData.get("lastName");
    const phone = formData.get("phone");
    const roomCategory = formData.get("roomCategory");
    const checkInDate = formData.get("checkIn");
    const checkOutDate = formData.get("checkOut");
    const nOfGuests = formData.get("guests");
    const specialRequest = formData.get("specialRequests");
    const isAirportShuttleIncluded = formData.get("airportShuttle");
    const isBreakfastIncluded = formData.get("breakfastIncluded");

    console.log(
      fName,
      lName,
      phone,
      roomCategory,
      checkInDate,
      checkOutDate,
      nOfGuests,
      specialRequest,
      isAirportShuttleIncluded,
      isBreakfastIncluded
    );

    // const newStay = await prisma.stay({
    //   data: {
    //     room:
    //   },
    // });
  } catch (error) {
    console.log(error);
    return error;
  }
};
