import { mainColor } from '@/Colors';
export const Buttons = () => {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:mt-8 max-sm:w-[60%]">
      <button
        className={`max-sm:w-full bg-${mainColor} text-sm p-2 px-6 rounded-md text-white`}
      >
        Sign In
      </button>
      <button
        className={`max-sm:w-full text-${mainColor} border border-${mainColor} hover:bg-${mainColor} hover:text-white text-sm p-2 px-6 rounded-md`}
      >
        Sign Up
      </button>
    </div>
  );
};
