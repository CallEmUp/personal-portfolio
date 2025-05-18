import React from 'react';
import { motion } from 'framer-motion';

const EmailSidebar: React.FC = () => {
  return (
    <motion.div
      className="fixed right-10 bottom-0 hidden md:block z-10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <motion.a
          href="mailto:vonH.trent@gmail.com"
          className="text-secondary hover:text-secondary transition-colors py-5 vertical-text"
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '500',
            fontSize: '17px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          vonH.trent@gmail.com
        </motion.a>
        <div 
          style={{ 
            width: '2px', 
            height: '100px', 
            backgroundColor: '#909090',
            marginTop: '16px'
          }} 
        />
      </div>
    </motion.div>
  );
};

export default EmailSidebar; 