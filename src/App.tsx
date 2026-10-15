import { PageIntro } from "./components/PageIntro";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Education } from "./components/sections/Education";
import { DevOpsPipeline } from "./components/sections/DevOpsPipeline";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { useIsTouchDevice } from "./hooks/useIsTouchDevice";

function App() {
  const isTouch = useIsTouchDevice();

  return (
    <div className={isTouch ? "" : "no-cursor"}>
      <PageIntro />
      <ScrollProgress />
      {!isTouch && <CustomCursor />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <DevOpsPipeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
