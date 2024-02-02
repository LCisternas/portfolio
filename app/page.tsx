import IconSun from "./components/icons/sun";

function Home() {
  return (
    <main className="bg-neutral-800 h-screen text-slate-300">

      {/* Nav */}
      <header className="grid grid-cols-5 mx-52 px-1 py-4">
        <h2 className="">Lucas Cisternas</h2>
        <nav className="col-span-3">
          <ul className="flex justify-start space-x-5">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Github</li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <button className="">
            <IconSun />
          </button>
        </div>
      </header>

    </main>
  );
}

export default Home;