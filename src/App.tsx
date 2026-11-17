import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />

      <div
        aria-hidden="true"
        className="noise pointer-events-none fixed inset-0 z-[70] opacity-[0.028] mix-blend-screen"
      />

      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-[10px] focus:font-semibold focus:uppercase focus:tracking-[0.14em] focus:text-black"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
