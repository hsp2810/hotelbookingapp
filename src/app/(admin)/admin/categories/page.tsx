import prisma from "@/prisma/setup";
import Category from "./Category";
import Link from "next/link";
import { ICategory } from "@/types";

export default async function Categories() {
  const categories = await prisma.roomCategory.findMany();

  return (
    <main>
      <section className='flex justify-between p-10'>
        <h1 className='text-3xl font-bold'>All categories</h1>
        <Link
          href={"/admin/categories/new"}
          className='bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        >
          Add new category
        </Link>
      </section>
      {!categories || categories.length === 0 ? (
        <div className='pl-10'>
          <h1>No categories found. Added categories will be displayed here.</h1>
        </div>
      ) : (
        <CategoryTable categories={categories} />
      )}
    </main>
  );
}

const CategoryTable = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className='w-3/4 m-auto block relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Unit #
            </th>
            <th scope='col' className='px-6 py-3'>
              Category name
            </th>
            <th scope='col' className='px-6 py-3'>
              Price Start (per night)
            </th>
            <th scope='col' className='px-6 py-3'>
              Price End (per night)
            </th>
            <th scope='col' className='px-6 py-3'>
              Floors
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
          {categories.map((category) => {
            return <Category category={category} key={category.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
