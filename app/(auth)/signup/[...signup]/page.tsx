import { SignUp } from '@clerk/nextjs';
const signUp = () => {
  return (
    <div className={`w-full h-screen flex justify-between items-center`}>
      <SignUp />
    </div>
  );
};

export default signUp;
