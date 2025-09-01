import Navigation from "./components/navigation"
import Hero from "./components/hero"
import Portfolio from "./components/portfolio"
import Experience from "./components/experience"
import TechStack from "./components/tech-stack"
import Social from "./components/social"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Portfolio />
      <Experience />
      <TechStack />
      <Social />
    </main>
  )
}
