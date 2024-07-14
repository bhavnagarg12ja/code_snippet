import { Logo } from './logo';
import { Buttons } from './buttons';
export const NavBar = () => {
  return (
    <div className="flex justify-between items-center m-5 max-sm:flex-col max-sm:mt-10 mx-8">
      <Logo />
      <Buttons />
    </div>
  );
};
