import Image from "next/image";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <nav className='flex justify-between items-center p-5 bg-slate-50 shadow-md'>
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
        <Link href={"/"} className=''>
          Home
        </Link>
      </ul>
      <Link
        href={"/login"}
        className='bg-yellow text-violet py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
      >
        Login / Signup as an Admin
      </Link>
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

export default AdminHeader;
