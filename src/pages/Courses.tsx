import { CalendarBlank, Student } from "phosphor-react";

import { Button } from "../Components/Button";
import { CardCourses } from "../Components/CardCourses";
import Rocket from "../assets/rocketseat.svg";
import CPS from "../assets/CPS.png";
import SPTech from "../assets/sptech.png";
import Elera from "../assets/elera.png";

export function Courses() {
  return (
    <section id="courses" className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 items-center">
        <strong className="text-4xl text-center">Minhas qualificações</strong>
        <div className="w-full lg:w-3/5 flex flex-col items-start">
          <CardCourses
            subtitle="Desenvolvimento Front-End"
            text="Atualmente estou fazendo o curso gratuito da Rocketseat
              (Discover) com intuito de me especializar em tecnologias como React,
              React Native e NodeJS. Estou na etapa Especializar, onde possui conhecimentos em consumir APIs, Typescript, React, etc."
            img={Rocket}
            complete="Etapa 2/3"
            certificate="Certificado-Rocketseat.pdf"
            download="Certificado Rocketseat"
          />

          <CardCourses
            subtitle="Desenvolvimento de Sistemas"
            text="Fiz ensino médio e técnico em Desenvolvimento de Sistemas na ETEC Cidade Tiradentes. Lá foi onde aprendi os fundamentos da programação e a porta de estrada nesta área. HTML, CSS, Javascript, PHP, SQL Server, MySql, essas são algumas das tecnologias que aprendemos, mas optei em me aperfeiçoar em Javascript."
            img={CPS}
            position="RIGHT"
            complete="Completo"
            certificate="etec.pdf"
            download="Certificado ETEC"
          />
          <CardCourses
            subtitle="Análise e Desenvolvimento de Sistemas"
            text="Nesta faculdade é onde estou aprendendo a seu um desenvolvedor de verdade, não apenas focando em programação, mas também, em análise de sistemas. Em apenas um semestre foi o suficiente para eu aprender diversas coisas no universo de Tecnologia da informação. Atualmente estou cursando o 2º semestre e estagiando na Elera."
            complete="Etapa 2/4"
            img={SPTech}
          />

          <CardCourses
            subtitle="Estágio"
            text="Graças a SPtech, fui capaz de ter o meu primeiro emprego como estagiário na Elera. Irei opera na plataforma Salesforce e estou aberto e diversos aprendizados e conhecimento dos meus gestores e superiores."
            img={Elera}
            position="RIGHT"
          />
        </div>
      </div>
    </section>
  );
}
