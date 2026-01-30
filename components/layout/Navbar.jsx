import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Update active section
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-display font-bold gradient-text">
              AK
            </a>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-orange-500 active'
                      : 'text-text-secondary hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <button
              className="md:hidden text-2xl transition-transform hover:scale-110"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-bg-secondary z-50 md:hidden shadow-2xl ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="flex flex-col p-8 space-y-6">
          <button
            className="self-end text-2xl mb-4 hover:rotate-90 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg hover:text-orange-500 transition-all hover:translate-x-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
