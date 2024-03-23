import { createContext, ReactNode } from "react";
import { userData } from "../utils/userData";
import { useState } from "react";
import { api } from "../services/api";
interface ProjectsProviderProps {
  children: ReactNode;
}

interface ProjectsContextValues {
  getData: () => Promise<void>;
  repositories: ReposType[];
}

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const ProjectsContext = createContext({} as ProjectsContextValues);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  const getData = async () => {
    try {
      const response = await api.get(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );
      setRepositories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProjectsContext.Provider value={{ getData, repositories }}>
      {children}
    </ProjectsContext.Provider>
  );
};
