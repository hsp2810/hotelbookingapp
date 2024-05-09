import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='p-10'>
      <h1 className='text-3xl font-bold'>Hello Admin</h1>
      <section className='flex flex-col gap-2 mt-10'>
        <Link
          href={"/admin/rooms"}
          className='block w-fit bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        >
          View all rooms
        </Link>
        <Link
          href={"/admin/categories"}
          className='block w-fit bg-yellow text-violet py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        >
          View all categories
        </Link>
        <Link
          href={"/admin/users"}
          className='block w-fit bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        >
          View all users
        </Link>
      </section>
    </main>
  );
}
