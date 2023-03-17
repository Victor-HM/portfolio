import { ArrowCircleDown } from "phosphor-react";

interface WelcomeProps {
  navigation: Function;
}

export function Welcome({ navigation }: WelcomeProps) {
  return (
    <section
      id="welcome"
      className="flex flex-col items-center gap-20 py-14 lg:py-28 px-0 lg:px-20"
    >
      <div className="flex flex-col items-center gap-10">
        <span className="bg-neutral-900 p-2 rounded-md">
          Never Stop Learning
        </span>
        <span className="font-thin text-5xl text-center flex flex-col lg:flex-row gap-0 lg:gap-3">
          <p>Olá, eu sou</p>
          <span className="text-violet-600">Victor Hugo</span>
        </span>
        <strong className="text-6xl lg:text-7xl flex flex-col lg:flex-row gap-0 lg:gap-3 ">
          <p className="">Front-end </p> <p>Developer</p>
        </strong>
        <p className="w-1/2 text-neutral-600 text-justify">
          Olá, fique a vontade de explorar o meu portfólio e me conhecer melhor.
          Qualquer dúvida, entre em contato.
        </p>

        <div className="w-12 h-12 flex relative">
          <a
            href="#about"
            className="w-full h-full z-50"
            onClick={(e) => navigation(e)}
          ></a>
          <ArrowCircleDown
            size={48}
            className="absolute animate-bounce text-violet-700 z-0"
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        <a href="https://github.com/Victor-HM">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/victor-hugo-carvalho-moreira-dos-santos-54b9ab1ba">
          {/* <img src={LinkedinIcon} alt="" className="w-10" /> */}
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
      </div>
    </section>
  );
}
