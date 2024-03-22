interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

interface IProjectsCardProps {
  repository: ReposType;
}
import { ButtonMainAlt } from "../ButtonMainAlt";
import { ButtonMain } from "../ButtonMain";
export const ProjectsCard = ({ repository }: IProjectsCardProps) => {
  return (
    <li
      className="box=border h-80 md:h-60 w-f max-w-80 md:w-80 p-4 border-2 border-rose-400 rounded-md flex flex-col justify-between hover:border-rose-600 hover:shadow-lg dark:hover:shadow-white/10 transition-all duration-300"
      key={repository.id}
    >
      <h1 className="text-xl text-stone-950 dark:text-stone-50">
        {repository.name}
      </h1>

      <p className="text-sm text-stone-600 dark:text-stone-300">
        {repository.description?.substring(0, 129)}
      </p>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <ButtonMain
          buttonText="Github code"
          buttonLink={repository.html_url}
          textSize="sm"
          width="w-full md:w-1/2"
        ></ButtonMain>
        {repository.homepage && (
          <ButtonMainAlt
            buttonText="See demo"
            buttonLink={repository.homepage}
            textSize="sm"
            width="w-full md:w-1/2"
          ></ButtonMainAlt>
        )}
      </div>
    </li>
  );
};
