import { useAuth } from '@clerk/nextjs';

export const Buttons = () => {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:mt-8 max-sm:w-[60%]">
      <button
        className={`max-sm:w-full bg-purple-600 text-sm p-2 px-6 rounded-md text-white`}
      >
        Sign In
      </button>
      <button
        className={`max-sm:w-full text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white text-sm p-2 px-6 rounded-md`}
      >
        Sign Up
      </button>
    </div>
  );
};
