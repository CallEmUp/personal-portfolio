import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'expertise', href: '#expertise' },
    { label: 'work', href: '#projects' },
    { label: 'experience', href: '#experience' },
    { label: 'contact', href: '#contact' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
      }
    }
  };

  const HamburgerButton = ({ onClick }: { onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-0 cursor-pointer p-0"
      aria-label="Open menu"
    >
      <span className="block w-5 h-[2px] bg-[#e0e0e0] rounded-full" />
      <span className="block w-5 h-[2px] bg-[#e0e0e0] rounded-full" />
      <span className="block w-3.5 h-[2px] bg-[#FFA500] rounded-full self-start ml-[6px]" />
    </button>
  );

  return (
    <>
      {/* Static hero navbar */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNav(e, 'home')} className="flex items-center">
            <img
              src="/tv_logo.png"
              alt="Logo"
              className="h-8 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(1622%) hue-rotate(360deg) brightness(103%) contrast(104%)'
              }}
            />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={(e) => handleNav(e, item.href.substring(1))}
                className="group text-[#777] hover:text-[#FFA500] transition-colors duration-300 text-xs font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <span className="text-[#FFA500]/40 text-[10px] mr-0.5 align-top">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[#444] mx-1">{'/'}{'/'}</span>
                <span className="tracking-wider">{item.label}</span>
              </motion.a>
            ))}
          </nav>
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
        </div>
      </header>

      {/* Floating sticky navbar with gradient fade at bottom */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(to bottom, #0f0f0f 50%, transparent 100%)',
          paddingBottom: '20px',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNav(e, 'home')} className="flex items-center">
            <img
              src="/tv_logo.png"
              alt="Logo"
              className="h-7 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(1622%) hue-rotate(360deg) brightness(103%) contrast(104%)'
              }}
            />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => handleNav(e, item.href.substring(1))}
                className="group text-[#888] hover:text-[#FFA500] transition-colors duration-300 text-xs font-medium"
              >
                <span className="text-[#FFA500]/40 text-[10px] mr-0.5 align-top">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[#444] mx-1">{'/'}{'/'}</span>
                <span className="tracking-wider">{item.label}</span>
              </a>
            ))}
          </nav>
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
        </div>
      </div>

      {/* Mobile drawer overlay + panel */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] max-w-[85vw] bg-[#111111] flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <img
                  src="/tv_logo.png"
                  alt="Logo"
                  className="h-7 w-auto"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(1622%) hue-rotate(360deg) brightness(103%) contrast(104%)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer text-[#e0e0e0] hover:text-[#FFA500] transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href.substring(1))}
                    className="flex items-center gap-3 py-3.5 text-[#bbb] hover:text-[#FFA500] transition-colors duration-300"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * i + 0.1 }}
                  >
                    <span className="text-[#FFA500]/40 text-[10px] font-medium w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium tracking-wider capitalize">{item.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="px-6 pb-8">
                <div className="h-px bg-[#2a2a2a] mb-4" />
                <a
                  href="mailto:vonH.trent@gmail.com"
                  className="text-[#888] hover:text-[#FFA500] transition-colors text-xs font-mono"
                >
                  vonH.trent@gmail.com
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
