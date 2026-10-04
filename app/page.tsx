import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LineNumbers from '@/components/LineNumbers';

export default function Home() {
  return (
    <>
      <Navbar />
      <LineNumbers />
      <main className="lg:pl-12">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
