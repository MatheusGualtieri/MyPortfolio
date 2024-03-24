interface ModalMenuProps {
  toggleModal: () => void;
}
import { IoMdCloseCircle } from "react-icons/io";
import { ButtonA } from "../ButtonA";
import { ButtonSwitch } from "../ButtonSwitch";
import { useEffect, useRef } from "react";

export const ModalMenu = ({ toggleModal }: ModalMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (!event.target) {
        return;
      }
      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return (
    <div className="bg-black/50 fixed top-0 h-lvh w-lvw z-50 flex justify-center justify-items-center content-center items-center">
      <div
        className="box-border p-8 w-10/12 max-w-80 h-2/5 bg-stone-200 dark:bg-stone-800 flex flex-col gap-10"
        ref={ref}
      >
        <div className="w-full flex justify-end">
          <IoMdCloseCircle className="w-10 h-10 text-red-600 hover:text-red-800 cursor-pointer" />
        </div>
        <div
          className="dark:text-stone-50 flex flex-col
        gap-8 justify-between items-center text-3xl"
        >
          <ButtonA
            buttonText="Sobre Mim"
            buttonLink="#about-me"
            onClick={toggleModal}
          />
          <ButtonA
            buttonText="Projetos"
            buttonLink="#projects"
            onClick={toggleModal}
          />
          <ButtonA
            buttonText="Contatos"
            buttonLink="#contacts"
            onClick={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};
