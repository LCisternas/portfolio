import Navigation from '../components/layout/navigation';
import Hero from '../components/layout/hero';
import Portfolio from '../components/layout/portfolio';
import Experience from '../components/layout/experience';
import TechStack from '../components/layout/tech-stack';
import Social from '../components/layout/social';

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
  );
}
