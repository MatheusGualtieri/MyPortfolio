import { TechList } from "../TechList";

export const AboutMeSection = () => {
  return (
    <div className="flex justify-center w-full" id="about-me">
      <div className="my-8 box-border px-8 w-full max-w-[1200px] h-auto flex flex-col gap-6 md:">
        <h1 className="text-stone-900 dark:text-stone-50 text-center text-3xl">
          Sobre mim
        </h1>
        <p className="text-stone-600 dark:text-stone-300">
          Desenvolvedor FullStack com experiência em React.js, Node.js,
          TypeScript, TypeORM, Styled Components, Python, Django, consumo e
          criação de APIs REST. Possuo experiência com metodologias Ágeis.
          Possuo Inglês intermediário-avançado. Formado em Análise e
          Desenvolvimento de Sistemas na Estácio, curso Técnico de Informática
          na ETEC, e um curso Desenvolvedor Fullstack na Kenzie Academy
        </p>
        <h2 className="text-stone-900 dark:text-stone-50 text-center text-2xl">
          Habilidades
        </h2>
        <TechList />
      </div>
    </div>
  );
};
