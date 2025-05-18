import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../../styles/mobile.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const socialLinks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: "https://github.com/CallEmUp",
      label: "GitHub"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <div className="relative min-h-screen bg-primary">
      {/* Fixed Social Sidebar */}
      <motion.div 
        className="fixed left-10 bottom-0 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-secondary transform hover:-translate-y-1 transition-all duration-200"
              aria-label={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
          <motion.div 
            className="w-px h-24 bg-text-secondary"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="px-6 lg:px-24 mx-auto max-w-7xl">
        {children}
      </main>

      {/* Navigation Dots */}
      <motion.nav 
        className="fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="group relative"
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-text-secondary group-hover:bg-secondary cursor-pointer transition-colors duration-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.7 + index * 0.1 }}
              />
              <div className="absolute right-0 translate-x-full pl-6 top-1/2 -translate-y-1/2 hidden group-hover:block">
                <span className="text-text-secondary capitalize whitespace-nowrap text-sm">
                  {item}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Layout; 