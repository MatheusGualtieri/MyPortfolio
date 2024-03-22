import { ITechs } from "../TechList";

export const TechCard = (item: ITechs) => {
  return (
    <li
      key={item.name}
      className="flex flex-col gap-1 justify-center items-center text-center"
    >
      <h3 className="text-stone-600 dark:text-stone-300">{item.name}</h3>
      <item.logo className="text-rose-400 border-b-2 border-rose-400 w-14 h-14"></item.logo>
    </li>
  );
};
