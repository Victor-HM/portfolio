import { ArrowCircleUp } from "phosphor-react";
import { Button } from "../Components/Button";

interface Networking {
  navigation: Function;
}

export function Networking({ navigation }: Networking) {
  return (
    <div id="networking" className="flex flex-col items-center gap-16 mt-28">
      <div className="w-1/2 flex flex-col items-center gap-5">
        <strong className="text-5xl lg:text-6xl text-violet-700">
          Networking
        </strong>
        <p className="text-lg text-center text-gray-400">
          Você pode me enviar um email ou conversar diretamente através das
          minhas redes.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/victor-hugo-carvalho-moreira-dos-santos-54b9ab1ba"
          target="_blank"
          className="w-72 h-16 flex justify-center items-center p-4 gap-3 border-2 border-neutral-900 rounded-md transition-all hover:scale-110"
        >
          <i className="fa-brands fa-linkedin fa-2x text-violet-700"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Victor-HM"
          target="_blank"
          className="w-72 h-16 flex justify-center items-center p-4 gap-3 border-2 border-neutral-900 rounded-md transition-all hover:scale-110"
        >
          <i className="fa-brands fa-github fa-2x text-violet-700"></i>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/victor27cm/"
          target="_blank"
          className="w-72 h-16 flex justify-center items-center p-4 gap-3 border-2 border-neutral-900 rounded-md transition-all hover:scale-110"
        >
          <i className="fa-brands fa-instagram fa-2x text-violet-700"></i>
          <span>Instagram</span>
        </a>
      </div>

      <div className="w-12 h-12 flex relative">
        <a
          href="#welcome"
          className="w-full h-full z-50"
          onClick={(e) => navigation(e)}
        ></a>
        <ArrowCircleUp
          size={48}
          className="absolute animate-bounce text-violet-700 z-0"
        />
      </div>
    </div>
  );
}
