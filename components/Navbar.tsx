import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Portfolio', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Impact', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Professional SVG Logo */}
            <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill={isScrolled ? "#1e3a8a" : "white"} />
                <path d="M30 70V30H40L60 55V30H70V70H60L40 45V70H30Z" fill={isScrolled ? "white" : "#1e3a8a"} />
                <path d="M20 20L10 30V70L20 80" stroke={isScrolled ? "#14b8a6" : "white"} strokeWidth="4" strokeLinecap="round" />
                <path d="M80 80L90 70V30L80 20" stroke={isScrolled ? "#14b8a6" : "white"} strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <span className={`font-bold text-xl tracking-tight hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Nick Njau
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-gray-200 animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;