"use client"

import { useState } from "react";
import IconSun from "./components/icons/sun";
import IconMoon from "./components/icons/moon";
import IconMenu from "./components/icons/menu";

function Home() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <main className="bg-neutral-800 h-screen text-slate-200 p-2">

      {/* Nav */}
      <header className="grid grid-cols-2">
        <div className="flex justify-start items-center px-2">
          <h2 className="font-semibold text-lg">Lucas Cisternas</h2>
        </div>
        <div className="flex justify-end items-center md:hidden">
          <button className="border-[1px] border-neutral-600 p-2 rounded-md">
            <IconMenu width="w-5" height="h-5" />
          </button>
        </div>
      </header>

      {/* Description */}
      <section className="p-4">
        <p className="bg-neutral-700 p-3 rounded-md text-center font-light text-base">
          Hola, soy un Ingeniero de Software localizado en Chile
        </p>
      </section>

    </main>
  );
}

export default Home;