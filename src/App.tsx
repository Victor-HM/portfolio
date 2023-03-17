import { BaseSyntheticEvent } from "react";
import { Header } from "./Components/Header";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Networking } from "./pages/Networking";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Welcome } from "./pages/Welcome";

function App() {
  function Navigation(e: BaseSyntheticEvent) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    const to = document.querySelector(id).offsetTop;
    window.scroll({
      top: to - 80,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Header navigation={Navigation} />
      <main className="flex flex-col gap-20 pt-20 text-white">
        <Welcome navigation={Navigation} />
        <About />
        <Courses />
        <Projects />
        <Skills />
        <Networking navigation={Navigation} />
      </main>
      <footer className="w-full bg-[#0d0d0d] py-5 text-white flex justify-center items-center gap-3">
        <p>Victor Hugo © 2023</p>
      </footer>
    </>
  );
}

export default App;
