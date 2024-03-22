import { TechList } from "../TechList";

export const AboutMeSection = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="my-8 box-border px-8 w-full max-w-[1200px] h-auto flex flex-col gap-6 md:">
        <h1 className="text-stone-900 dark:text-stone-50 text-center text-3xl">
          Sobre mim
        </h1>
        <p className="text-stone-600 dark:text-stone-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          eveniet eum facere veritatis labore consequatur. Cupiditate quia magni
          perspiciatis iste, soluta quas quaerat dolorem obcaecati dolorum, iure
          doloremque atque! Ex?
        </p>
        <h2 className="text-stone-900 dark:text-stone-50 text-center text-2xl">
          Habilidades
        </h2>
        <TechList />
      </div>
    </div>
  );
};
