import { useEffect, useState } from "react";
import { Repos } from "../Components/Repos";
import Carnaval from "../assets/carnaval.png";
import Chat from "../assets/chat.png";
import Buttons from "../assets/typeButton.png";

export function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center px-14 py-0">
      <strong className="text-4xl mb-4 text-center">Meus projetos</strong>
      <div className="flex flex-wrap justify-center gap-4">
        <Repos
          name="Blocos do Carnaval"
          img={Carnaval}
          github_url="https://github.com/Victor-HM/carnaval-boraCodar"
          site_url="https://carnaval-bora-codar.vercel.app"
        />

        <Repos
          name="Chat Responsivo"
          img={Chat}
          github_url="https://github.com/Victor-HM/responsive-chat-boraCodar"
          site_url="https://responsive-chat-bora-codar.vercel.app"
        />

        <Repos
          name="Mesmo componente, estilos diferente"
          img={Buttons}
          github_url="https://github.com/Victor-HM/type-buttons-boraCodar"
          site_url="https://type-buttons-bora-codar.vercel.app"
        />
      </div>
    </section>
  );
}
