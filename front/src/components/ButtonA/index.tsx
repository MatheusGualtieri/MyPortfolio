import { ReactNode } from "react";

interface ButtonAProps {
  buttonText: string;
  buttonLink?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const ButtonA = ({
  buttonText,
  buttonLink,
  onClick,
  children,
}: ButtonAProps) => {
  return (
    <a
      className="hover:text-rose-400 duration-300 transition-all"
      href={buttonLink ? buttonLink : ""}
      onClick={onClick}
    >
      {children}
      {buttonText}
    </a>
  );
};
