import { useEffect } from "react";
import { useProjects } from "../../hooks/UseProjects";
import { ProjectsCard } from "../ProjectsCard";
export const ProjectsList = () => {
  const { getData, repositories } = useProjects();
  useEffect(() => {
    getData();
  }, []);
  return (
    <ul className="box-border p-8 w-full max-w-[1200px] flex flex-col md:flex-row flex-wrap gap-8 justify-center content-center">
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectsCard repository={repository} />
        ))}
    </ul>
  );
};
