"use client";

import { useState } from "react";

export default function RoomFilterSidebar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [checkboxes, setCheckboxes] = useState({
    wifi: false,
    breakfast: false,
    parking: false,
    pool: false,
  });

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSliderChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "maxPrice") {
      setMaxPrice(value);
    }
  };

  const handleApplyFilters = () => {
    // Implement filter logic here
    console.log("Filters applied:", { minPrice, maxPrice, checkboxes });
  };

  return (
    <div className='sidebar bg-gray-100 p-4 h-[86vh] rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Filters</h2>
      <div className='mb-4'>
        <h3 className='text-sm font-medium mb-2'>Amenities</h3>
        <label className='inline-flex items-center mb-2'>
          <input
            type='checkbox'
            name='wifi'
            checked={checkboxes.wifi}
            onChange={handleCheckboxChange}
            className='form-checkbox h-5 w-5 text-blue-500'
          />
          <span className='ml-2'>Wi-Fi</span>
        </label>
      </div>
      <div className='mb-4'>
        <h3 className='text-sm font-medium mb-2'>Price Range</h3>
        <input
          type='range'
          name='minPrice'
          value={minPrice}
          min='0'
          max='100'
          onChange={handleSliderChange}
          className='w-full'
        />
        <input
          type='range'
          name='maxPrice'
          value={maxPrice}
          min='0'
          max='100'
          onChange={handleSliderChange}
          className='w-full'
        />
        <div className='flex justify-between text-sm'>
          <span>Min: ${minPrice}</span>
          <span>Max: ${maxPrice}</span>
        </div>
      </div>
      <button
        onClick={handleApplyFilters}
        className='bg-violet text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none'
      >
        Apply Filters
      </button>
    </div>
  );
}
