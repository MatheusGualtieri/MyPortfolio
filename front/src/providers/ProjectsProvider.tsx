import { createContext, ReactNode } from "react";

interface ProjectsProviderProps {
  children: ReactNode;
}

interface ProjectsContextValues {
  getData: (data: any) => Promise<void>;
}

export const ProjectsContext = createContext({} as ProjectsContextValues);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const getData = async (data: any) => {
    try {
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProjectsContext.Provider value={{ getData }}>
      {children}
    </ProjectsContext.Provider>
  );
};
