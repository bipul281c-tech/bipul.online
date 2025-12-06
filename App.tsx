import React from 'react';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import VibeCode from './components/VibeCode';
import Fitness from './components/Fitness';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Marquee />
      <Hero />
      <main className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-24 pb-24">
        <About />
        <Projects />
        <VibeCode />
        <Fitness />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;