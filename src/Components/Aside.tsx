interface AsideProps {
  isHidden: boolean;
  setIsHidden: (boolean: boolean) => void;
  navigation: Function;
}

export function Aside({ isHidden, navigation, setIsHidden }: AsideProps) {
  return (
    <aside
      aria-hidden={isHidden}
      className="hidden aria-hidden:flex gap-5 absolute top-full right-0 flex-col bg-zinc-900 rounded-b-md p-5 items-center"
    >
      <a
        href="#welcome"
        className="text-xl"
        onClick={(e) => {
          {
            navigation(e);
            setIsHidden(false);
          }
          setIsHidden(false);
        }}
      >
        Início
      </a>
      <a
        href="#about"
        className="text-xl"
        onClick={(e) => {
          navigation(e);
          setIsHidden(false);
        }}
      >
        Sobre
      </a>
      <a
        href="#projects"
        className="text-xl"
        onClick={(e) => {
          navigation(e);
          setIsHidden(false);
        }}
      >
        Projetos
      </a>
      <a
        href="#networking"
        className="text-xl"
        onClick={(e) => {
          navigation(e);
          setIsHidden(false);
        }}
      >
        Contato
      </a>
    </aside>
  );
}
