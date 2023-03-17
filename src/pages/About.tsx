import { CaretDoubleRight, DownloadSimple } from "phosphor-react";
import { Button } from "../Components/Button";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 py-14 lg:py-28 px-10 lg:px-20"
    >
      <img
        src="https://github.com/Victor-HM.png"
        alt=""
        className="w-2/2 lg:w-4/5 rounded-full object-contain shadow-purple"
      />
      <div className="w-full flex flex-col gap-8">
        <span className="flex items-center gap-2">
          <CaretDoubleRight size={24} className="text-violet-600" />
          <p className="text-xs tracking-widest">DESENVOLVEDOR FRONT-END</p>
        </span>

        <h1 className="tracking-widest text-3xl text-justify">
          Desenvolvedor Front-end com experiências em React, React-native, Node
          e JavaScript puro.
        </h1>

        <p className="text-gray-300 leading-4">
          Meu nome é Victor, tenho 18 anos e atuo na área de desenvolvimento há
          mais de 3 ano. Possuo experiência em diversos projetos e tecnologias,
          mas estou buscando a minha primeira oportunidade no mercado como
          desenvolvedor Junior.
        </p>
        <p className="text-gray-300 leading-5">
          Logo abaixo tem o meu currículo com informaçôes mais detalhadas sobre
          mim. Se preferir, podemos marcar uma call atráves do meu e-mail que
          está disponibilizado.
        </p>

        <div className="flex justify-center lg:justify-start items-center gap-5 lg:gap-10">
          <a href="document/CV.pdf" download="Currículo">
            <Button
              placeholder="Baixar CV"
              icon={<DownloadSimple size={32} />}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
