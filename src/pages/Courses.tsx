import { CalendarBlank, Student } from "phosphor-react";

import { Button } from "../Components/Button";
import { CardCourses } from "../Components/CardCourses";
import Rocket from "../assets/rocketseat.svg";
import CPS from "../assets/CPS.png";

export function Courses() {
  return (
    <section id="courses" className="flex flex-col py-10 gap-10">
      <div className="flex flex-col gap-10 items-center">
        <strong className="text-4xl text-center">Minhas qualificações</strong>
        <div className="w-full lg:w-3/5 flex flex-col items-start">
          <CardCourses
            subtitle="Desenvolvimento Front-End"
            text="Atualmente estou fazendo o curso gratuito da Rocketseat
              (Discover) com intuito de me especializar em tecnologias como React,
              React-native e Node JS. Estou na etapa Especializar, onde possui conhecimentos em consumir APIs, Typescript, React, etc."
            img={Rocket}
            complete="Etapa 2/3"
            certificate="Certificado-Rocketseat.pdf"
          />

          <CardCourses
            subtitle="Desenvolvimento de Sistemas"
            text="Fiz ensino médio e técnico em Desenvolvimento de Sistemas na ETEC Cidade Tiradentes. Lá foi onde aprendi os fundamentos da programação e a porta de estrada nesta área. HTML, CSS, Javascript, PHP, SQL Server, MySql, essas são algumas das tecnologias que aprendemos, mas optei em me aperfeiçoar em Javascript."
            img={CPS}
            position="RIGHT"
          />
        </div>
      </div>
    </section>
  );
}
