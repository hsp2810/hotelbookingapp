import { actionLogin } from "@/src/serveractions/authactions";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className='min-h-[86vh] flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Login</h2>
        <form action={actionLogin}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-semibold mb-2'
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-semibold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className={`w-full bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none`}
          >
            Log In
          </button>
        </form>
        <p className='text-gray-900 text-sm mt-5 text-center'>
          Don't have an account?{" "}
          <Link href={"/signup"} className='hover:underline'>
            Register here!
          </Link>
        </p>
      </div>
    </div>
  );
}
