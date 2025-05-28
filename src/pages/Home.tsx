import React from 'react';
import Hero from '../components/sections/Hero';
import Featured from '../components/sections/Featured';
import Properties from '../components/sections/Properties';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <Featured />
      <Properties />
      <About />
      <Contact />
    </main>
  );
};

export default Home;