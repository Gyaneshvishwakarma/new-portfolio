
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Add a class to the body on mount and remove it on unmount
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
