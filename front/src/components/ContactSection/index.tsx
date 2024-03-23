import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { userData } from "../../utils/userData";
export const ContactSection = () => {
  return (
    <div
      className="w-full md:h-[600px] flex justify-center gap-8"
      id="contacts"
    >
      <div className="w-full box-border p-8 max-w-[1200px] flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl text-center md:h-1/3 text-stone-950 dark:text-stone-50">
          Contatos
        </h1>
        <ul className="flex flex-col md:flex-row items-center gap-12 md:justify-between">
          <li className="flex flex-col  items-center ">
            <a
              className="group"
              href={`mailto:${userData.emailUser}`}
              target="_blank"
            >
              <MdEmail className="w-32 h-32 text-rose-400 group-hover:text-rose-600 transition-all duration-300" />
            </a>
            <h2 className="text-xl text-center text-stone-950 dark:text-stone-50">
              Email
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-300">
              {userData.emailUser}
            </p>
          </li>
          <li className="flex flex-col  items-center">
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
              className="group"
            >
              <FaWhatsapp className="w-32 h-32 text-rose-400 group-hover:text-rose-600 transition-all duration-300" />
            </a>
            <h2 className="text-xl text-center text-stone-950 dark:text-stone-50">
              Telefone
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-300">
              {userData.whatsappNumber}
            </p>
          </li>
          <li className="flex flex-col  items-center">
            <a
              className="group"
              target="_blank"
              href={`https://github.com/${userData.githubUser}`}
            >
              <FaGithub className="w-32 h-32 text-rose-400 group-hover:text-rose-600 transition-all duration-300" />
            </a>
            <h2 className="text-xl text-center text-stone-950 dark:text-stone-50">
              Github
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-300">
              {userData.githubUser}
            </p>
          </li>
          <li className="flex flex-col  items-center">
            <a
              className="group"
              target="_blank"
              href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            >
              <FaLinkedin className="w-32 h-32 text-rose-400 group-hover:text-rose-600 transition-all duration-300" />
            </a>
            <h2 className="text-xl text-center text-stone-950 dark:text-stone-50">
              Linkedin
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-300">
              {userData.linkedinUser}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
