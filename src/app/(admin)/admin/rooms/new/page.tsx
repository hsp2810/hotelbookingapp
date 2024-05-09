import prisma from "@/prisma/setup";
import { actionCreateRoom } from "@/src/app/serveractions/room";
import { ICategory } from "@/types";
import CreateRoomInputs from "./CreateRoomInputs";

export default async function CreateRoomForm() {
  const categories: ICategory[] = await prisma.roomCategory.findMany();

  return (
    <main>
      <div className='max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md my-10'>
        <h2 className='text-3xl font-semibold mb-10 text-center text-violet'>
          Add a new room
        </h2>
        <form action={actionCreateRoom}>
          <CreateRoomInputs categories={categories} />

          <div className='mb-4'>
            <div className='flex items-start space-x-2 justify-center'>
              <label htmlFor='termsAndConditions' className='text-gray-700'>
                <span className='text-red-600'>Room#</span> will be
                automatically created by the system based on the previous rooms
                present.
              </label>
            </div>
          </div>
          <div className='mt-8'>
            <button
              type='submit'
              className='block w-1/2 m-auto bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none text-lg'
            >
              Add room
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
