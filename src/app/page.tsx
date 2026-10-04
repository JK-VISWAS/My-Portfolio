import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
