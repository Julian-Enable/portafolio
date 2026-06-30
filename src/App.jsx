import { useSmoothScroll } from "./hooks/useSmoothScroll";
import CustomCursor from "./components/CustomCursor";
import AuroraBackground from "./components/AuroraBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <AuroraBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
