"use client";

import { ICategory } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

const CreateRoomInputs = ({ categories }: { categories: ICategory[] }) => {
  const [category, setCategory] = useState<ICategory>(categories[0]);
  const [floorOptions, setFloorOptions] = useState<number[]>(category.floors);
  const [minRent, setMinRent] = useState<number>(category.priceStart);
  const [maxRent, setMaxRent] = useState<number>(category.priceEnd);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category: any = categories.filter(
      (category) => category.categoryName === e.target.value
    );
    setCategory(category);
    setFloorOptions(category[0].floors);
    setMinRent(category[0].priceStart);
    setMaxRent(category[0].priceEnd);
  };

  return (
    <>
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
          value={category.categoryName}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 font'
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.categoryName}
              className='font-sans'
            >
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='floor'
          className='block text-gray-700 font-semibold mb-2'
        >
          Floor number
        </label>
        <select
          id='floor'
          name='floor'
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 font'
        >
          {floorOptions?.map((floor) => {
            return (
              <option value={floor} className='font-sans' key={floor}>
                {floor}
              </option>
            );
          })}
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='rent'
          className='block text-gray-700 font-semibold mb-2'
        >
          Rent per 1 night stay
        </label>
        <input
          type='number'
          min={minRent}
          max={maxRent}
          id='rent'
          placeholder={`${minRent}`}
          name='rent'
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
        />
      </div>
    </>
  );
};

export default CreateRoomInputs;
