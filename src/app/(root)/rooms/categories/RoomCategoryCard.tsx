import Link from "next/link";
import React from "react";

interface PageProps {
  imageUrl: string;
  category: string;
  features: any[];
  id: string;
}

const RoomCategoryCard = ({ imageUrl, category, features, id }: PageProps) => {
  return (
    <div className='room-card bg-white rounded-lg overflow-hidden shadow-md'>
      <div
        className='room-image h-40 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-2'>{category}</h2>
        <ul className='list-disc list-inside text-gray-700'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className='mt-4'>
          <Link
            // href={"/login?redirect=book-room"}
            href={`/rooms/categories/${id}`}
            className=' block text-center bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
          >
            View {category} options
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCategoryCard;
