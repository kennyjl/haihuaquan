import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import CaseStudies from './CaseStudies';
import News from './News';
import Contact from './Contact';
import Features from './Features';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <News />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
