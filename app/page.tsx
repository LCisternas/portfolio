import IconSun from "./components/icons/sun";
import IconCode from "./components/icons/code";
import IconLinkedin from "./components/icons/linkedin";
import IconPaper from "./components/icons/paper";

function Home() {
  return (
    /* bg with primary color */
    <main className="bg-[#212022] h-screen text-[#eeefef] p-2">

      {/* Nav */}
      <header className="grid grid-cols-3">
        <div className="flex justify-start items-center space-x-2 px-2 col-span-2">
          <IconCode width="w-5" height="h-5" />
          <h2 className="font-semibold text-lg">Lucas Cisternas</h2>
        </div>
        <div className="flex justify-end items-center space-x-2 md:hidden">
          <button className="border-[1px] border-[#333334] p-2 rounded-md bg-yellow-300">
            <IconSun width="w-5" height="h-5" />
          </button>
          {/* <button className="border-[1px] border-[#333334] p-2 rounded-md">
            <IconMenu width="w-5" height="h-5" />
          </button> */}
        </div>
      </header>

      {/* Description */}
      <section className="flex flex-col items-center space-y-5 p-4">
        {/* bg with secondary color */}
        <div className="p-3 bg-[#333334] rounded-md">
          <p className="text-center font-light text-base">
            Ingeniero de Software localizado en Chile.
            <br />
            Especializado en desarrollo web
          </p>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <button className="flex justify-center items-center space-x-2 bg-cyan-200 text-black px-6 py-2 rounded-md font-semibold w-full">
            <IconPaper />
            Curriculum
          </button>
          <button className="flex justify-center items-center space-x-2 bg-cyan-200 text-black px-6 py-2 rounded-md font-semibold w-full">
            <IconLinkedin />
            Linkedin
          </button>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-bold underline underline-offset-[6px] decoration-[#333334] decoration-[6px]">
          Experiencia
        </h2>
        {/* <p>
          En mi carrera me eh desempeñado utilizando diferentes lenguajes y tecnologías.
          Entre las principales estan TypeScript, Python, React, Django, Express, Redux
        </p> */}
      </section>

    </main>
  );
}

export default Home;