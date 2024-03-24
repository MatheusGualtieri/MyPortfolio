import { AboutMeSection } from "../../components/AboutMeSection";
import { ContactSection } from "../../components/ContactSection";
import { Header } from "../../components/Header";
import { ModalMenu } from "../../components/ModalMenu";
import { ProjectsSection } from "../../components/ProjectsSection";
import { ShowcaseSection } from "../../components/ShowcaseSection";
import { useState } from "react";
export const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div className=" min-h-screen h-full w-full bg-stone-50 dark:bg-gradient-to-br dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 transition-all duration-500">
      <Header toggleModal={toggleModal} />
      {isOpenModal && <ModalMenu toggleModal={toggleModal}></ModalMenu>}
      <ShowcaseSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
