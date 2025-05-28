import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';
import { ScrollProvider } from './context/ScrollContext';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/effects/ParticleBackground';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

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
    <BrowserRouter>
      <ThemeProvider>
        <ScrollProvider>
          <div className="relative overflow-hidden transition-colors duration-300">
            <ParticleBackground />
            <Cursor />
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </ScrollProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;