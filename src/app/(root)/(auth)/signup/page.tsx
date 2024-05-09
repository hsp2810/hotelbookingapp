import { actionRegister } from "@/src/serveractions/authactions";
import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <div className='flex items-center justify-center bg-gray-100 py-5'>
      <div className='bg-white p-8 rounded-lg shadow-md w-1/3'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Signup</h2>
        <form action={actionRegister}>
          <InputField
            type='text'
            name='firstName'
            placeholder='Enter your first name'
            label='First Name'
          />
          <InputField
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            label='Last Name'
          />
          <InputField
            type='text'
            name='email'
            placeholder='Enter your email'
            label='Email'
          />
          <InputField
            type='password'
            name='password'
            placeholder='Enter your password'
            label='Password'
          />
          <InputField
            type='tel'
            name='phone'
            placeholder='Enter your phone'
            label='Phone'
          />
          <button
            type='submit'
            className={`w-full bg-yellow text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none`}
          >
            Signup
          </button>
        </form>
        <p className='text-gray-900 text-sm mt-5 text-center'>
          Already have an account?{" "}
          <Link href={"/login"} className='hover:underline'>
            Login here!
          </Link>
        </p>
      </div>
    </div>
  );
}

interface IField {
  name: string;
  placeholder: string;
  type: "text" | "password" | "tel";
  label: string;
}

const InputField = ({ name, placeholder, type, label }: IField) => {
  return (
    <div className='mb-6'>
      <label htmlFor={name} className='block text-gray-700 font-semibold mb-2'>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500'
        placeholder={placeholder}
        required
      />
    </div>
  );
};
