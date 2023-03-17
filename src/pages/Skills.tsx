import Typescript from "../assets/typescript.svg";
import Tailwind from "../assets/tailwindcss.svg";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-5 py-10 px-8"
    >
      <strong className="text-4xl">Skills</strong>
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-html5 fa-2x "></i>
          <p className="">HTML</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-css3 fa-2x"></i>
          <p>CSS</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-square-js fa-2x"></i>
          <p>Javascript</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-react fa-2x"></i>
          <p>React</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i>
            <img src={Typescript} alt="" className="w-8" />
          </i>
          <p>Typescript</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-github fa-2x"></i>
          <p>Git</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="">
            <img src={Tailwind} alt="" className="w-8" />
          </i>
          <p>Tailwindcss</p>
        </div>
        <div className="w-full lg:w-96 bg-neutral-900 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
          <i className="fa-brands fa-css3 fa-2x"></i>
          <p>Styled Component</p>
        </div>
      </div>
    </section>
  );
}
