import prisma from "@/prisma/setup";
import Room from "./Room";
import Link from "next/link";
import { IRoom } from "@/types";

export default async function Rooms() {
  const rooms: IRoom[] = await prisma.room.findMany({
    include: {
      category: {
        select: {
          categoryName: true,
        },
      },
    },
  });

  return (
    <main>
      <section className='flex justify-between p-10'>
        <h1 className='text-3xl font-bold'>All rooms</h1>
        <Link
          href={"/admin/rooms/new"}
          className='bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        >
          Add new room
        </Link>
      </section>
      <RoomKeyDisplay />
      {rooms.length == 0 ? (
        <div className='pl-10'>
          <h1>No rooms found</h1>
        </div>
      ) : (
        <RoomTable rooms={rooms} />
      )}
    </main>
  );
}

const RoomKeyDisplay = () => {
  return (
    <>
      <h1 className='text-center font-semibold'>Room Key Assigning Criteria</h1>
      <div className='flex justify-center gap-5 my-5'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl font-semibold text-violet'>3</h1>
          <h3 className='text-sm font-extralight'>Category</h3>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl font-semibold text-violet'>2</h1>
          <h3 className='text-sm font-extralight'>Floor</h3>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl font-semibold text-violet'>3</h1>
          <h3 className='text-sm font-extralight'>Room#</h3>
        </div>
      </div>
    </>
  );
};

const RoomTable = ({ rooms }: { rooms: IRoom[] }) => {
  return (
    <div className='w-1/2 m-auto block relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Room Key
            </th>
            <th scope='col' className='px-6 py-3'>
              Floor
            </th>
            <th scope='col' className='px-6 py-3'>
              Rent
            </th>
            <th scope='col' className='px-6 py-3'>
              isBookedNow
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
