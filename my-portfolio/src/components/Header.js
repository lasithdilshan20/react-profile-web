import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaNewspaper, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  animation: slideDown 0.5s ease-out;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
  }

  nav {
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
      height: 100vh;
      width: 80%;
      max-width: 300px;
      background: var(--purple-dark);
      flex-direction: column;
      padding: 20px 20px 80px 20px;
      transition: left 0.3s ease;
      z-index: 100;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      padding-top: 80px;
    }
  }

  .menu-icon {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1000;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: var(--purple-dark);
    border-radius: 8px;
    
    @media (max-width: 768px) {
      display: flex;
    }
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    height: 60px;

    @media (max-width: 768px) {
      padding: 0 1rem;
      justify-content: center;
    }
  }

  nav a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;

    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 1.1rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: none;
        padding-left: 1.5rem;
      }

      .icon {
        font-size: 1.3rem;
        min-width: 24px;
      }
    }
  }

  .overlay {
    display: none;
    @media (max-width: 768px) {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 50;
      backdrop-filter: blur(4px);
    }
  }

  .active {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }

  .theme-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    margin-top: auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      margin-top: 2rem;
      width: calc(100% - 2rem);
      justify-content: center;
      font-size: 1.1rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .icon {
      font-size: 1.3rem;
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'projects', 'articles', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleLinkClick = (section) => {
    closeMenu();
    setActiveSection(section);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <HeaderContainer isOpen={isOpen} className={scrolled ? 'scrolled' : ''}>
      <div className="overlay" onClick={closeMenu} />
      <div className="header-content">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <h1 className="logo">Portfolio</h1>
        <nav>
          <a 
            href="#about" 
            onClick={() => handleLinkClick('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            <FaUser className="icon" /> About
          </a>
          <a 
            href="#projects" 
            onClick={() => handleLinkClick('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            <FaCode className="icon" /> Projects
          </a>
          <a 
            href="#articles" 
            onClick={() => handleLinkClick('articles')}
            className={activeSection === 'articles' ? 'active' : ''}
          >
            <FaNewspaper className="icon" /> Articles
          </a>
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            <FaEnvelope className="icon" /> Contact
          </a>
          <div className="theme-switcher" onClick={toggleTheme}>
            {isDarkMode ? (
              <>
                <FaSun className="icon" /> Light Mode
              </>
            ) : (
              <>
                <FaMoon className="icon" /> Dark Mode
              </>
            )}
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;