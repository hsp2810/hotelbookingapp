import { IRoom } from "@/types";
import Link from "next/link";

interface PageProps {
  room: IRoom;
}

export default function RoomCard({ room }: PageProps) {
  return (
    <div className='room-card bg-white rounded-lg overflow-hidden shadow-md h-fit w-[18rem]'>
      <div
        className='room-image h-36 bg-cover bg-center'
        style={{ backgroundImage: `url("/img/standard.jpg")` }}
      ></div>
      <div className='p-4'>
        <ul className='list-disc list-inside text-gray-700'>
          {room.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className='mt-4'>
          <Link
            // href={"/login?redirect=book-room"}
            href={`/book-room`}
            className=' block text-center bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
          >
            Reserve!
          </Link>
        </div>
      </div>
    </div>
  );
}
