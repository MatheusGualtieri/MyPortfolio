interface ButtonMainAltProps {
  buttonText: string;
  buttonLink?: string;
  width?: string;
  textSize?: string;
}
export const ButtonMainAlt = ({
  buttonText,
  buttonLink,
  width,
  textSize,
}: ButtonMainAltProps) => {
  return (
    <a
      className={`${width} p-1 text-${
        textSize ? textSize : "xl"
      } bg-rose-400 rounded-full border-2 text-center text-stone-50 border-rose-400 hover:text-rose-400 hover:bg-transparent duration-300 transition-all`}
      href={buttonLink ? buttonLink : ""}
      target="_blank"
    >
      {buttonText}
    </a>
  );
};
