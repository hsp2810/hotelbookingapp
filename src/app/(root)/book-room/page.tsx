import prisma from "@/prisma/setup";
import { actionBookRoom } from "@/src/serveractions/book-room";
import { ICategory } from "@/types";
import Link from "next/link";

export default async function BookRoomForm() {
  const roomCategories: ICategory[] = await prisma.roomCategory.findMany();
  return (
    <main>
      <div className='max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md my-10'>
        <h2 className='text-3xl font-semibold mb-10 text-center text-violet'>
          Book Your Stay
        </h2>
        <form action={actionBookRoom}>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label
                htmlFor='firstName'
                className='block text-gray-700 font-semibold mb-2'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
                placeholder='John'
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block text-gray-700 font-semibold mb-2'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
                placeholder='Doe'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-semibold mb-2'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              placeholder='john.doe@example.com'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='phone'
              className='block text-gray-700 font-semibold mb-2'
            >
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              placeholder='Enter your phone number'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='roomCategory'
              className='block text-gray-700 font-semibold mb-2'
            >
              Room Category
            </label>
            <select
              id='roomCategory'
              name='roomCategory'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 font'
            >
              {roomCategories.map((category) => (
                <option key={category.id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label
                htmlFor='checkIn'
                className='block text-gray-700 font-semibold mb-2'
              >
                Check-in Date
              </label>
              <input
                type='date'
                id='checkIn'
                name='checkIn'
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              />
            </div>
            <div>
              <label
                htmlFor='checkOut'
                className='block text-gray-700 font-semibold mb-2'
              >
                Check-out Date
              </label>
              <input
                type='date'
                id='checkOut'
                name='checkOut'
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='guests'
              className='block text-gray-700 font-semibold mb-2'
            >
              Number of Guests
            </label>
            <input
              type='number'
              id='guests'
              name='guests'
              min='1'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='specialRequests'
              className='block text-gray-700 font-semibold mb-2'
            >
              Special Requests or Comments
            </label>
            <textarea
              id='specialRequests'
              name='specialRequests'
              rows={3}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              placeholder='Any special requests?'
            ></textarea>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Additional Options
            </label>
            <div className='flex items-center space-x-4'>
              <input
                type='checkbox'
                id='airportShuttle'
                name='airportShuttle'
                className='form-checkbox text-yellow-500'
              />
              <label htmlFor='airportShuttle' className='text-gray-700'>
                Airport Shuttle Request
              </label>
            </div>
            <div className='flex items-center space-x-4'>
              <input
                type='checkbox'
                id='breakfastIncluded'
                name='breakfastIncluded'
                className='form-checkbox text-yellow-500'
              />
              <label htmlFor='breakfastIncluded' className='text-gray-700'>
                Breakfast Included
              </label>
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Agreement and Confirmation
            </label>
            <div className='flex items-start space-x-2'>
              <input
                type='checkbox'
                id='termsAndConditions'
                name='termsAndConditions'
                className='form-checkbox text-yellow-500 mt-1'
              />
              <label htmlFor='termsAndConditions' className='text-gray-700'>
                By checking the box below, you agree to the{" "}
                <Link
                  href={"/terms-and-conditions"}
                  className='text-yellow mr-1'
                >
                  Terms and Conditions
                </Link>
                of our hotel
              </label>
            </div>
          </div>
          <div className='mt-8'>
            <button
              type='submit'
              className='block w-1/2 m-auto bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none text-lg'
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
