import { Header } from "../../components/Header";
import { ShowcaseSection } from "../../components/ShowcaseSection";

export const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-stone-50 dark:bg-gradient-to-br dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 transition-all duration-500">
      <Header />
      <ShowcaseSection />
    </div>
  );
};
