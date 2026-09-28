import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#about"
        className="sr-only left-4 top-4 z-[70] rounded-full bg-white px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
