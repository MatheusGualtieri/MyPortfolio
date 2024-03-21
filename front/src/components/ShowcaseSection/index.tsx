import { ButtonMain } from "../ButtonMain";
import { ButtonMainAlt } from "../ButtonMainAlt";

export const ShowcaseSection = () => {
  return (
    <>
      <div className="bg-stone-900 w-full h-[35rem] md:h-[42rem] bg-lines-alt bg-no-repeat bg-cover b brightness-110  absolute "></div>
      <div className=" w-full  p-8  h-[35rem] md:h-[42rem] bg-lines bg-no-repeat bg-cover absolute flex justify-center items-center">
        <div className=" w-full max-w-[1200px] md:h-full  p-8 absolute flex flex-col-reverse md:flex-row gap-8 md:gap-0">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center md:items-start  gap-6">
            <div>
              <h1 className="text-2xl md:text-4xl text-stone-50 ">
                Matheus Gualtieri,
              </h1>
              <h2 className="text-xl md:text-3xl text-rose-600">
                Desenvolvedor Fullstack
              </h2>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 items-center">
              <ButtonMainAlt buttonText="Baixar CV" width="w-52" />
              <ButtonMain buttonText="Entre em contato" width="w-52" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
            <div className="w-52 h-auto md:w-72 border-2 border-rose-800 rounded-full flex justify-center ">
              <img
                className="w-52 h-auto md:w-[286px] rounded-full blur-none"
                src="../../../public/selfie.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
