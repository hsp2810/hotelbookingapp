import { ICategory } from "@/types";
import React from "react";

export default function Category({ category }: { category: ICategory }) {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <td className='px-6 py-4'>{category.categoryUnit}</td>
      <td
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {category.categoryName}
      </td>
      <td className='px-6 py-4'>${category.priceStart}</td>
      <td className='px-6 py-4'>${category.priceEnd}</td>
      <td className='px-6 py-4'>
        {category.floors[0]} - {category.floors[category.floors.length - 1]}
      </td>
      <td className='px-6 py-4 text-right'>
        <a href='#' className='font-medium text-green-600  hover:underline'>
          Edit
        </a>
      </td>
      <td className='px-6 py-4 text-right'>
        <a href='#' className='font-medium text-red-600  hover:underline'>
          Delete
        </a>
      </td>
    </tr>
  );
}
