interface ButtonAProps {
  buttonText: string;
  buttonLink?: string;
}

export const ButtonA = ({ buttonText, buttonLink }: ButtonAProps) => {
  return (
    <a
      className="hover:text-rose-400 duration-300 transition-all"
      href={buttonLink ? buttonLink : ""}
    >
      {buttonText}
    </a>
  );
};
