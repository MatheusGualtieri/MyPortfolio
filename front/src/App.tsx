import { Dashboard } from "./pages/Dashboard";
import { ProjectsProvider } from "./providers/ProjectsProvider";

export const App = () => {
  return (
    <>
      <ProjectsProvider>
        <Dashboard />
      </ProjectsProvider>
    </>
  );
};
