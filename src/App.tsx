import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Featured from './components/sections/Featured';
import Properties from './components/sections/Properties';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Cursor from './components/ui/Cursor';
import { ScrollProvider } from './context/ScrollContext';
import ParticleBackground from './components/effects/ParticleBackground';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "NeoEstate | Futuristic Real Estate";
    
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ScrollProvider>
      <div className="relative bg-dark text-light overflow-hidden">
        <ParticleBackground />
        <Cursor />
        <Header />
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Hero />
            <Featured />
            <Properties />
            <About />
            <Contact />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;