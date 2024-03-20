import { useContext } from "react";
import { ProjectsContext } from "../providers/ProjectsProvider";

export const useProjects = () => {
  const projectsContext = useContext(ProjectsContext);
  return projectsContext;
};
