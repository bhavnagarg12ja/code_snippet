'use client';
import { useAuth } from '@clerk/clerk-react';

export const Buttons = () => {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <a href="/my-snippets">
          <button
            className={`max-sm:w-full bg-purple-600 text-sm p-2 px-6 rounded-md text-white`}
          >
            Access to the app
          </button>
        </a>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:mt-8 max-sm:w-full">
          <a href="/sign-in">
            <button
              className={`max-sm:w-full bg-purple-600 text-sm p-2 px-6 rounded-md text-white`}
            >
              Sign In
            </button>
          </a>

          <a href="/sign-up">
            <button
              className={`max-sm:w-full text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white text-sm p-2 px-6 rounded-md`}
            >
              Sign Up
            </button>
          </a>
        </div>
      )}
    </div>
  );
};
