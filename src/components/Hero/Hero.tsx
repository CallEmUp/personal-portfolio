import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[120px] opacity-[0.07]"
          style={{
            width: '700px',
            height: '700px',
            top: '-10%',
            right: '-10%',
            background: 'radial-gradient(circle, #FFA500, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-[0.05]"
          style={{
            width: '500px',
            height: '500px',
            bottom: '5%',
            left: '-5%',
            background: 'radial-gradient(circle, #6366f1, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[140px] opacity-[0.04]"
          style={{
            width: '600px',
            height: '600px',
            top: '30%',
            left: '30%',
            background: 'radial-gradient(circle, #FFA500, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        {/* Name */}
        <motion.h1
          className="font-black uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-[#e0e0e0]">Trenton</span>{' '}
          <span className="text-[#FFA500]">vonHartitzsch</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-[#888] font-light uppercase mt-8 mb-14"
          style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1.15rem)', letterSpacing: '0.3em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Software Engineer &amp; Data Scientist.
        </motion.h2>

        {/* CTA */}
        <motion.a
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className="inline-block border border-[#FFA500] text-[#FFA500] px-10 py-3 rounded text-xs tracking-[0.25em] uppercase font-semibold
                     hover:bg-[#FFA500] hover:text-black transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
