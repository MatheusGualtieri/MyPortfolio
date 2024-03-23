import { IconType } from "react-icons";
import { techs } from "../../utils/techData";

import { TechCard } from "../TechCard";
export interface ITechs {
  name: string;
  logo: IconType;
}
export const TechList = () => {
  return (
    <ul className="w-full h-auto flex gap-8 flex-wrap justify-center">
      {techs.map((item) => {
        return <TechCard logo={item.logo} name={item.name} key={item.name} />;
      })}
    </ul>
  );
};
