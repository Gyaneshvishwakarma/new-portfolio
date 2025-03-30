
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { name: 'Blog', href: isHome ? '#blog' : '/blog' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' }
  ];
  
  return (
    <footer className="py-12 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="font-bold text-2xl text-gradient mb-4 md:mb-0">Portfolio</Link>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          <ThemeToggle />
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <p className="text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
