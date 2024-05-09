import prisma from "@/prisma/setup";
import { actionCreateCategory } from "@/src/app/serveractions/category";
import FloorSelect from "./FloorSelect";

export default async function CreateCategoryForm() {
  const categories = await prisma.roomCategory.findMany();

  return (
    <div className='max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md my-10'>
      <h2 className='text-3xl font-semibold mb-10 text-center text-violet'>
        Create a new category
      </h2>
      <form action={actionCreateCategory}>
        <div className='mb-4'>
          <label
            htmlFor='categoryName'
            className='block text-gray-700 font-semibold mb-2'
          >
            Category Name
          </label>
          <input
            type='text'
            id='categoryName'
            name='categoryName'
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
          />
        </div>
        <FloorSelect categories={categories} />
        <div className='mb-4'>
          <label
            htmlFor='priceStart'
            className='block text-gray-700 font-semibold mb-2'
          >
            Set starting price (in $/per night) for rooms in this category
          </label>
          <input
            type='number'
            id='priceStart'
            name='priceStart'
            min='1'
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='priceEnd'
            className='block text-gray-700 font-semibold mb-2'
          >
            Set ending price (in $/per night) for rooms in this category
          </label>
          <input
            type='number'
            id='priceEnd'
            name='priceEnd'
            min='1'
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
          />
        </div>
        <div className='mt-8'>
          <button
            type='submit'
            className='block w-1/2 m-auto bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none text-lg'
          >
            Add the new category
          </button>
        </div>
      </form>
    </div>
  );
}
