import prisma from "@/prisma/setup";
import { IRoom } from "@/types";
import React from "react";
import RoomCard from "./RoomCard";
import RoomFilterSidebar from "./RoomFilterSidebar";

interface PageProps {
  params: {
    categoryslug: string;
  };
}

export default async function AvailableRooms({ params }: PageProps) {
  const roomsByCategory = await prisma.room.findMany({
    where: {
      roomCategoryId: params.categoryslug,
    },
  });
  return (
    <main className='flex'>
      <div className='flex flex-[50%]'>
        <RoomFilterSidebar />
      </div>
      <div className='grid grid-cols-5 gap-3'>
        {roomsByCategory.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
