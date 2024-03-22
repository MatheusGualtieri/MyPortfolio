import { IconType } from "react-icons";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiExpress, SiTailwindcss } from "react-icons/si";
import { LiaFileCode } from "react-icons/lia";
import { BsFiletypeSql } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import { TbBrandDjango } from "react-icons/tb";
import { RiSpeakLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

import { TechCard } from "../TechCard";
export interface ITechs {
  name: string;
  logo: IconType;
}
export const TechList = () => {
  const techs: ITechs[] = [
    {
      name: "HTML",
      logo: FaHtml5,
    },
    {
      name: "CSS",
      logo: IoLogoCss3,
    },
    {
      name: "Javascript",
      logo: IoLogoJavascript,
    },
    {
      name: "Typescript",
      logo: SiTypescript,
    },
    {
      name: "React.Js",
      logo: FaReact,
    },
    {
      name: "Express.Js",
      logo: SiExpress,
    },
    {
      name: "SQL",
      logo: BsFiletypeSql,
    },
    {
      name: "Node.Js",
      logo: FaNodeJs,
    },
    {
      name: "TypeORM",
      logo: LiaFileCode,
    },
    {
      name: "Git/Github",
      logo: FaGitAlt,
    },
    {
      name: "Figma",
      logo: FaFigma,
    },
    {
      name: "APIs",
      logo: VscServerProcess,
    },
    {
      name: "Python",
      logo: FaPython,
    },
    {
      name: "Django",
      logo: TbBrandDjango,
    },
    {
      name: "Tailwindcss",
      logo: SiTailwindcss,
    },
    {
      name: "Inglês",
      logo: RiSpeakLine,
    },
  ];
  return (
    <ul className="w-full h-auto flex gap-8 flex-wrap">
      {techs.map((item) => {
        return <TechCard logo={item.logo} name={item.name} key={item.name} />;
      })}
    </ul>
  );
};
