
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { name: 'Blog', href: isHome ? '#blog' : '/blog' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto flex justify-between items-center px-4">
        <RouterLink to="/" className="font-bold text-2xl text-gradient">Portfolio</RouterLink>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 glass rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
              <RouterLink
                key={link.name}
                to={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </RouterLink>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full glass mt-1 py-5 px-4 flex flex-col gap-4 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <RouterLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </RouterLink>
              )
            ))}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
