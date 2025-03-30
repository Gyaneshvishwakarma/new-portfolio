
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-blob mix-blend-multiply"></div>
      <div className="absolute top-1/3 -right-24 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      <div className="absolute -bottom-24 left-1/3 w-60 h-60 bg-purple-400/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center text-center md:text-left md:items-start md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span>Hi, I'm </span>
              <span className="text-gradient">Gyanesh Vishwakarma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground animate-fade-in [animation-delay:200ms]">
              MCA Student & Web Developer
            </h2>
            <p className="text-xl leading-relaxed mb-8 animate-fade-in [animation-delay:400ms]">
              Building modern web applications with cutting-edge technologies.
              Passionate about creating beautiful, functional, and accessible digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:600ms]">
              <a href="#projects" className="btn bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg transition-all">
                View My Work
              </a>
              <a href="#contact" className="btn glass-card px-6 py-3 rounded-lg transition-all">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Anime character image */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in [animation-delay:800ms]">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary opacity-20 blur-lg"></div>
              <img 
                src="/img3.jpg"
                alt="Anime style character" 
                className="object-cover w-full h-full rounded-2xl shadow-2xl glass-card p-1"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce glass rounded-full p-2"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
