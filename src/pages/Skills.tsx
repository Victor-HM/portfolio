import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Javascript from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Typescript from "../assets/typescript.svg";
import Git from "../assets/git-icon.svg";
import Tailwind from "../assets/tailwindcss.svg";
import StyledComponent from "../assets/styled-components.svg";
import Node from "../assets/nodejs-icon.svg";

import { CardSkills } from "../Components/CardSkills";

export function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center gap-5 px-8">
      <strong className="text-4xl">Skills</strong>
      <div className="flex gap-3 flex-wrap justify-center text-black">
        <CardSkills icon={Html} text="HTML" />
        <CardSkills icon={Css} text="CSS" />
        <CardSkills icon={Javascript} text="JAVASCRIPT" />
        <CardSkills icon={React} text="REACT" />
        <CardSkills icon={Typescript} text="TYPESCRIPT" />
        <CardSkills icon={Git} text="Git" />
        <CardSkills icon={Tailwind} text="TAILWINDCSS" />
        <CardSkills icon={StyledComponent} text="STYLED-COMPONENTS" />
        <CardSkills icon={Node} text="NodeJS" />
      </div>
    </section>
  );
}
