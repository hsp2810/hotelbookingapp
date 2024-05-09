"use client";

import { termsAndConditionsList } from "@/src/utils/data";
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const router = useRouter();

  return (
    <>
      <button
        className='mt-10 ml-10 bg-violet text-white py-2 rounded-md hover:bg-opacity-80 px-4 focus:outline-none transition'
        onClick={() => router.back()}
      >
        Go back
      </button>
      <div className='max-w-lg mx-auto bg-white p-6 rounded-md shadow-md mb-5'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          Terms and Conditions
        </h2>
        <div className='text-gray-700'>
          <ol className='list-decimal pl-6 mb-4'>
            {termsAndConditionsList.map((condition, index) => (
              <li key={index} className='mb-5'>
                <p>
                  <strong className='mr-1'>{condition}</strong>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
