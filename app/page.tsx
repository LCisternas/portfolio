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
    <main className="bg-neutral-800 h-screen text-slate-300">

      {/* Nav */}
      <header className="grid grid-cols-2 p-4">
        <div className="flex justify-start items-center">
          <h2 className="font-semibold">Lucas Cisternas</h2>
        </div>
        <div className="flex justify-end items-center">
          <button>
            <IconMenu />
          </button>
        </div>
      </header>

    </main>
  );
}

export default Home;