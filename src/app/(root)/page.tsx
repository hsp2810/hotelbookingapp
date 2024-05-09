import Link from "next/link";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 object-cover w-full h-full opacity-20 -z-10'
      >
        <source src='/bg.mp4' type='video/mp4' />
      </video>
      <main className='h-[87vh] flex flex-col gap-10 items-center justify-center z-50'>
        <h1 className='text-5xl font-extrabold text-center w-1/2 leading-tight'>
          Experience urban sophistication and unparalleled relaxation in the
          midst of the city buzz.
        </h1>
        <Link
          href={"/our-services"}
          className='bg-violet text-lg text-white p-5 rounded-full focus:outline-none transition hover:scale-105'
        >
          Explore our services
        </Link>
      </main>
    </>
  );
}
