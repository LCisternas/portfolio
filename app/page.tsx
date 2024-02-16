import IconSun from "./components/icons/sun";
import IconCode from "./components/icons/code";
import IconLinkedin from "./components/icons/linkedin";
import IconPaper from "./components/icons/paper";
import Experience from "./components/sections/experience/Experience";

function Home() {
  return (
    /* bg with primary color */
    <main className="bg-[#212022] text-[#eeefef] p-2">

      {/* Nav */}
      <header className="grid grid-cols-3 mb-5">
        <div className="flex justify-start items-center space-x-2 px-2 col-span-2">
          <IconCode width="w-5" height="h-5" />
          <h2 className="font-semibold text-lg">LCisternas</h2>
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
      <section className="flex flex-col items-center space-y-5 py-4 px-6">
        {/* bg with secondary color */}

        <div className="p-3 bg-[#333334] rounded-md">
          <p className="text-center font-light text-base">
            ¡Hola! Soy un Ingeniero de software ubicado en Chile
            {/* Ingeniero de Software localizado en Chile.
            <br />
            Especializado en desarrollo web */}
          </p>
        </div>

        <div className="w-full flex flex-col items-start">
          <h1 className="text-3xl font-semibold">Lucas Cisternas</h1>
          <p className="font-extralight">TypeScript / React / Python / Django</p>
        </div>

        <img width="200" height="200" src="/me.jpeg" alt="yo" className="rounded-full ring-2 ring-white w-24" />
        <div className="flex flex-col w-full space-y-2">
          <button className="flex justify-center items-center space-x-2 bg-cyan-400 text-black px-6 py-2 rounded-md font-semibold w-full">
            <IconPaper />
            Curriculum
          </button>
          <button className="flex justify-center items-center space-x-2 bg-cyan-400 text-black px-6 py-2 rounded-md font-semibold w-full">
            <IconLinkedin />
            Linkedin
          </button>
        </div>
      </section>

      <section className="py-4 px-6">
        <h2 className="text-xl font-bold underline underline-offset-[6px] decoration-[#333334] decoration-[6px]">
          Experiencia
        </h2>
        <Experience />
      </section>

    </main>
  );
}

export default Home;