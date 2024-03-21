interface ButtonMainProps {
  buttonText: string;
  buttonLink?: string;
  width?: string;
}
export const ButtonMain = ({
  buttonText,
  buttonLink,
  width,
}: ButtonMainProps) => {
  return (
    <a
      className={`${width} bg-transparent rounded-full border-2 border-rose-400 hover:text-stone-50 hover:bg-rose-400 duration-300 transition-all`}
      href={buttonLink ? buttonLink : ""}
    >
      {buttonText}
    </a>
  );
};
