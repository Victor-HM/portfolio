import { ArrowCircleDown, FileText, LinkedinLogo } from "phosphor-react";

interface WelcomeProps {
  navigation: Function;
}

export function Welcome({ navigation }: WelcomeProps) {
  return (
    <section
      id="welcome"
      className="h-screen flex flex-col items-center justify-between lg:justify-center gap-10 lg:gap-0 py-20 lg:py-20 px-0 lg:px-20 relative text-black"
    >
      <div className="flex flex-col items-center gap-10">
        <span className="bg-neutral-900 p-2 rounded-md text-white">
          Never Stop Learning
        </span>
        <span className="font-light text-5xl text-center flex flex-col lg:flex-row gap-0 lg:gap-3">
          <p>Olá, eu sou</p>
          <span className="text-violet-600">Victor Hugo</span>
        </span>
        <strong className="text-6xl lg:text-8xl flex flex-wrap justify-center gap-3 ">
          <p className="">Front-end </p> <p>Developer</p>
        </strong>
        <p className="w-1/2 text-neutral-600 text-center uppercase">
          Tenho 19 anos e sou desenvolvedor frontend com 3 anos de experiência
        </p>

        <div className="flex items-center gap-10">
          <a href="https://www.linkedin.com/in/victor-hugo-carvalho-moreira-dos-santos-54b9ab1ba">
            <LinkedinLogo size={36} weight="fill" />
          </a>
          <a href="https://github.com/Victor-HM">
            <i className="fa fa-github fa-2x"></i>
          </a>
          <a href="document/CV.pdf" download="Currículo">
            <FileText size={36} weight="fill" />
          </a>
        </div>
      </div>

      <div className="w-12 h-12 flex relative lg:absolute lg:bottom-0">
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
    </section>
  );
}
