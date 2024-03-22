interface ButtonMainProps {
  buttonText: string;
  buttonLink?: string;
  width?: string;
  textSize?: string;
}
export const ButtonMain = ({
  buttonText,
  buttonLink,
  width,
  textSize,
}: ButtonMainProps) => {
  return (
    <a
      className={`${width} p-1 text-${
        textSize ? textSize : "xl"
      } bg-transparent rounded-full border-2 text-center text-rose-400 border-rose-400 hover:text-stone-50 hover:bg-rose-400 duration-300 transition-all`}
      href={buttonLink ? buttonLink : ""}
      target="_blank"
    >
      {buttonText}
    </a>
  );
};
