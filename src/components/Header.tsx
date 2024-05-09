"use client";

import Image from "next/image";
import Link from "next/link";

const Header = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <nav className='flex justify-between items-center p-5 z-50'>
      <Link href={"/"}>
        <Image
          src={"/img/logo.png"}
          height={50}
          width={60}
          alt='Hotel'
          className='rounded-lg'
        />
      </Link>
      <ul className='flex space-x-4 items-center'>
        {!isLogin && (
          <>
            <NavLink title='Request a tour' href='/' />
            <NavLink title='Our Staff' href='/' />
            <NavLink title='Inquiry' href='/' />
            <Link
              href={"/login"}
              className='bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
            >
              Login / Signup
            </Link>
          </>
        )}
        {isLogin && (
          <Link
            href={"/rooms/categories"}
            className='bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
          >
            Book a room
          </Link>
        )}
      </ul>
    </nav>
  );
};

interface LinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: LinkProps) => {
  return (
    <li>
      <Link href={href} className='hover:text-violet transition-all'>
        {title}
      </Link>
    </li>
  );
};

export default Header;
