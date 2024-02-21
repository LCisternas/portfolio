import Experience from "./components/sections/experience/Experience";
import { CiSun } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

function Home() {
  /* bg with primary color */
  return (
    <main className="text-[#eeefef] p-2">

      {/* Nav */}
      <header className="grid grid-cols-3 mb-5 md:mx-16">
        <div className="flex justify-start items-center space-x-2 px-2 md:px-0 col-span-2">
          <FaCode fontSize={20} strokeWidth={0} />
          <h2 className="font-semibold text-lg">LCisternas</h2>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <a href="https://www.linkedin.com/in/lucas-cisternas/" target="_blank">
            <button className="border-[1px] border-[#333334] p-2 rounded-md">
              <CiLinkedin fontSize={25} strokeWidth={0} />
            </button>
          </a>
          <a href="https://github.com/LCisternas" target="_blank">
            <button className="border-[1px] border-[#333334] p-2 rounded-md">
              <VscGithub fontSize={25} strokeWidth={0} />
            </button>
          </a>
          <button className="border-[1px] border-[#333334] p-2 rounded-md bg-yellow-300">
            <CiSun className="text-black" fontSize={25} strokeWidth={0.2} />
          </button>
        </div>
      </header>

      {/* Description */}
      <section className="flex flex-col items-center space-y-5 py-4 px-6 md:mx-16">
        {/* bg with secondary color */}

        <div className="p-3 bg-[#333334] rounded-md md:w-full">
          <p className="text-center font-light text-base">
            ¡Hola! Soy un Ingeniero de software ubicado en Chile
            {/* Ingeniero de Software localizado en Chile.
            <br />
            Especializado en desarrollo web */}
          </p>
        </div>

        <div className="w-full flex flex-col items-center space-y-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col w-full items-start">
            <h1 className="text-3xl font-semibold md:text-4xl">Lucas Cisternas</h1>
            <p className="font-extralight">TypeScript / React / Python / Django</p>
          </div>
          <img width="200" height="200" src="/me.jpeg" alt="yo" className="rounded-full ring-2 ring-white w-24" />
        </div>

        <div className="flex md:justify-center w-full pt-5">
          <a className="w-full" target="_blank" href="https://drive.google.com/file/d/1Bu9Q2T0knkKNX7iq0OpUyJfkqx9Veb7M/view?usp=sharing">
            <button className="flex justify-center items-center space-x-2 bg-cyan-400 text-black px-6 py-2 rounded-md font-semibold w-full md:w-1/2">
              Curriculum
            </button>
          </a>
        </div>
      </section>

      <section className="py-4 px-6 md:mx-16">
        <h2 className="text-xl font-bold underline underline-offset-[6px] decoration-[#333334] decoration-[6px]">
          Experiencia
        </h2>
        <Experience />
      </section>

    </main>
  );
}

export default Home;