import { ProjectsList } from "../ProjectsList";

export const ProjectsSection = () => {
  return (
    <div
      className=" w-full my-8 flex flex-col justify-center items-center"
      id="projects"
    >
      <h1 className="text-3xl md:text-4xl text-stone-950 dark:text-stone-50 text-center">
        Projetos
      </h1>
      <ProjectsList />
    </div>
  );
};
