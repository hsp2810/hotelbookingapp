import { IRoom } from "@/types";
import React from "react";

export default function Room({ room }: { room: IRoom }) {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <TableField fieldValue={`#${room.roomKey}`} />
      <TableField fieldValue={room.floor} />
      <TableField fieldValue={`$${room.rent}`} />
      <TableField fieldValue={room.isBookedNow} />
      <td className='px-6 py-4 text-center'>{room.category?.categoryName}</td>
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

const TableField = ({
  fieldValue,
}: {
  fieldValue: string | number | boolean | null;
}) => {
  return (
    <td scope='row' className='px-6 py-4 text-center'>{`${fieldValue}`}</td>
  );
};
