import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header
      setIsSticky(window.scrollY > 100);

      // Active section
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }

      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 70;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
      setActiveSection(targetId.substring(1));
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo">Portfolio</a>

      <i
        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#about')}
        >
          About
        </a>
        <a
          href="#education"
          className={activeSection === 'education' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#education')}
        >
          Education
        </a>
        <a
          href="#services"
          className={activeSection === 'services' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#services')}
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#portfolio')}
        >
          Project
        </a>
        <a
          href="#certificates"
          className={activeSection === 'certificates' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#certificates')}
        >
          Certificates / Milestones
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
