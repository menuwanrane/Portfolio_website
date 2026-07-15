import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />


      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;