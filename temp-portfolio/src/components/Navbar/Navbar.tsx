import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Make the navbar visible at the top of the page
      if (currentScrollPos < 50) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }
      
      // Hide when scrolling down, show when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { label: 'Home', href: '#home' },
    // Uncomment the line below to enable the About section
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToTarget = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Set different offsets for each section
      let offset;
      
      switch(id) {
        case 'about':
          offset = 20; // Adjust this value to control About section scroll position
          break;
        case 'skills':
          offset = 165; // Adjust this value to control Skills section scroll position
          break;
        case 'experience':
          offset = 25; // Adjust this value to control Experience section scroll position
          break;
        case 'projects':
          offset = -85; // Adjust this value to control Projects section scroll position
          break;
        case 'contact':
          offset = -45; // Adjust this value to control Contact section scroll position
          break;
        default:
          offset = 20; // Default offset for other sections
      }

      window.scrollTo({
        top: element.offsetTop - offset, // Offset for header
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex items-center justify-between bg-primary"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: visible ? 0 : -100
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img 
          src="/tv_logo.png" 
          alt="TV Logo" 
          className="h-10 w-auto"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(1622%) hue-rotate(360deg) brightness(103%) contrast(104%)' 
          }}
        />
      </motion.div>
      
      <nav className="flex items-center space-x-8">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex items-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            <a 
              href={item.href}
              className="text-text-primary hover:text-secondary transition-colors duration-300 tracking-wide no-underline"
              onClick={(e) => handleScrollToTarget(e, item.href.substring(1))}
            >
              {item.label}
            </a>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar; 