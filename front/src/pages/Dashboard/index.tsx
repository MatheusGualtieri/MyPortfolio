import { AboutMeSection } from "../../components/AboutMeSection";
import { Header } from "../../components/Header";
import { ProjectsSection } from "../../components/ProjectsSection";
import { ShowcaseSection } from "../../components/ShowcaseSection";

export const Dashboard = () => {
  return (
    <div className=" min-h-screen h-full w-full bg-stone-50 dark:bg-gradient-to-br dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 transition-all duration-500">
      <Header />
      <ShowcaseSection />
      <AboutMeSection />
      <ProjectsSection />
    </div>
  );
};
