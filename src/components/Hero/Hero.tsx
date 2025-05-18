import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const buttonStyle = {
    width: '160px',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const,
    display: 'inline-block'
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Colored Bubble with Face Outline */}
        <motion.div
          className="w-36 h-36 mx-auto mb-10 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full relative overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img 
            src="/hero_pic.png" 
            alt="Profile Outline" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
            style={{ 
              opacity: .9,
              transform: 'translateX(-72px) translateY(-10px)'
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Trenton vonHartitzsch
          <span className="block sm:inline"> </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            Software Engineer
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          3+ years of experience building full-stack applications. 
          Skilled in Python, Java, and SQL, with growing expertise in machine learning, backend systems, and UI design. 
          I love solving real problems and thrive in fast-paced, collaborative environments.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            style={{ 
              ...buttonStyle,
              backgroundColor: '#FFA500', 
              color: '#000000',
            }}
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;