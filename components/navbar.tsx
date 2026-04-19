import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      
      const id = href.replace('#', '');
      
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }

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
        
        window.history.pushState(null, '', href);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Portfolio', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Impact', href: '#testimonials' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`font-black text-2xl tracking-tighter uppercase ${isScrolled || location.pathname !== '/' ? 'text-[#141414]' : 'text-white'}`}>
              NICK NJAU <span className="text-[#F27D26]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-[#F27D26]' : 'text-gray-100 hover:text-[#F27D26]'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/254769504732"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F27D26] text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-xl shadow-[#F27D26]/20"
              >
                Message me on WhatsApp
              </a>
              <a 
                href="mailto:sphynick@gmail.com"
                className={`text-xs font-black uppercase tracking-widest transition-all px-5 py-2.5 rounded-full border ${isScrolled || location.pathname !== '/' ? 'border-gray-200 text-gray-700 hover:bg-[#141414] hover:text-white' : 'border-white/20 text-white hover:bg-white/10'}`}
              >
                Email
              </a>
            </div>
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
                className="block px-3 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#141414] border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3 space-y-3">
              <a 
                href="https://wa.me/254769504732"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#F27D26] text-white px-5 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-[#F27D26]/20"
              >
                Message me on WhatsApp
              </a>
              <a 
                href="mailto:sphynick@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center border border-gray-100 text-[#141414] px-5 py-4 rounded-2xl font-black uppercase tracking-widest bg-gray-50"
              >
                Email Nick
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;