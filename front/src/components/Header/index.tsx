import { ButtonA } from "../ButtonA";
import { ButtonSwitch } from "../ButtonSwitch";
import { IoIosMenu } from "react-icons/io";

interface HeaderProps {
  toggleModal: () => void;
}

export const Header = ({ toggleModal }: HeaderProps) => {
  return (
    <div className="box-border bg-stone-50 fixed top-0 w-full max-w-1/2 h-12 flex dark:bg-stone-900 justify-items-center justify-center border-b-2 border-rose-400 transition-all duration-300 z-[2]">
      <div className="px-8 w-full flex justify-between items-center h-full max-w-[1200px]">
        <div className="">
          <a
            className="text-stone-950 text-2xl dark:text-stone-50 hover:brightness-90"
            href="#showcase"
          >
            My<span className="text-rose-400">Portfolio</span>
          </a>
        </div>
        <div className="flex gap-8">
          <ButtonSwitch />
          <nav className="hidden z-1 dark:text-stone-50 gap-11 md:flex md:z-0">
            <ButtonA buttonText="Sobre Mim" buttonLink="#about-me" />
            <ButtonA buttonText="Projetos" buttonLink="#projects" />
            <ButtonA buttonText="Contatos" buttonLink="#contacts" />
          </nav>
          <IoIosMenu
            className="w-6 h-6 md:hidden md:z-1 text-rose-400 hover:text-rose-600 cursor-pointer"
            onClick={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};
