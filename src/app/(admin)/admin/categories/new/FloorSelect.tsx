"use client";

import { ICategory } from "@/types";
import { useEffect, useState } from "react";

const FloorSelect = ({ categories }: { categories: ICategory[] }) => {
  const [isOccupied, setOccupied] = useState<boolean[]>([true, true, true]);

  useEffect(() => {
    categories.forEach((category) => {
      const updatedIsOccupied = [...isOccupied];
      console.log(category.floors[0].toString());
      if (category.floors[0].toString() === "1") {
        updatedIsOccupied[0] = false;
      } else if (category.floors[0].toString() === "5") {
        updatedIsOccupied[1] = false;
        setOccupied(updatedIsOccupied);
      } else if (category.floors[0].toString() === "9") {
        updatedIsOccupied[2] = false;
      }
      setOccupied(updatedIsOccupied);
    });
  }, []);

  return (
    <div className='mb-4'>
      <label
        htmlFor='floors'
        className='block text-gray-700 font-semibold mb-2'
      >
        Select the floor slots{" "}
        <span className='block text-xs text-red-500'>
          This category rooms will only be available in the selected floor slot
        </span>
      </label>
      <select
        id='floors'
        name='floors'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 font-sans'
      >
        {isOccupied[0] && isOccupied[1] && isOccupied[2] && (
          <option value={""} disabled>
            No floors available
          </option>
        )}
        {isOccupied[0] && <option value={"firstFloorSlot"}>1 - 4</option>}
        {isOccupied[1] && <option value={"secondFloorSlot"}>5 - 8</option>}
        {isOccupied[2] && <option value={"thirdFloorSlot"}>9 - 10</option>}
      </select>
    </div>
  );
};

export default FloorSelect;
