import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTheme } from "@/hooks/useTheme";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Fundamentals } from "@/sections/Fundamentals";
import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { ProofStrip } from "@/sections/ProofStrip";
import { Signals } from "@/sections/Signals";
import { Toolkit } from "@/sections/Toolkit";
import { Work } from "@/sections/Work";

function App() {
  const { light, toggle } = useTheme();
  useScrollReveal();

  return (
    <div className="app-shell" id="top">
      <Navbar light={light} onToggleTheme={toggle} />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Experience />
        <Work />
        <Toolkit />
        <Fundamentals />
        <Signals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
