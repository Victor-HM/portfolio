import { List } from "phosphor-react";
import { useState } from "react";
import { Aside } from "./Aside";

interface HeaderProps {
  navigation: Function;
}

export function Header({ navigation }: HeaderProps) {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  return (
    <header className="w-full text-white h-20 bg-zinc-900 fixed top-0 left-0 flex justify-between items-center px-10 z-50">
      <img
        src="https://github.com/Victor-HM.png"
        alt="Foto do Victor Hugo"
        className="w-16 rounded-full"
      />
      <div className="hidden md:flex gap-5">
        <a href="#welcome" onClick={(e) => navigation(e)}>
          Início
        </a>
        <a href="#about" onClick={(e) => navigation(e)}>
          Sobre
        </a>
        <a href="#courses" onClick={(e) => navigation(e)}>
          Qualificações
        </a>
        <a href="#projects" onClick={(e) => navigation(e)}>
          Projetos
        </a>
        <a href="#networking" onClick={(e) => navigation(e)}>
          Networking
        </a>
      </div>

      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setIsHidden(!isHidden)}
      >
        <List size={32} color="#FFF" />
      </div>
      <Aside
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        navigation={navigation}
      />
    </header>
  );
}
