import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trenton-vonhartitzsch/' },
  { label: 'GitHub', href: 'https://github.com/CallEmUp' },
  { label: 'Instagram', href: 'https://www.instagram.com/trentvonh_/' },
];

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const techStack = [
  { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
  { name: 'Flask', icon: `${DEVICON}/flask/flask-original.svg` },
  { name: 'Django', icon: `${DEVICON}/django/django-plain.svg` },
  { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
  { name: 'AWS', icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
  { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
  { name: 'Pandas', icon: `${DEVICON}/pandas/pandas-original.svg` },
  { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
];

const SnapshotCards: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-min">

    {/* Photo + quick intro (tall, spans 2 rows on sm+) */}
    <motion.div
      className="rounded-xl overflow-hidden flex flex-col sm:row-span-2 border border-[#FFA500]/15"
      style={{ background: 'linear-gradient(135deg, #1f1708 0%, #1a1206 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full aspect-[4/3] bg-[#0d0a04] overflow-hidden">
        <img
          src="/hero_pic.png"
          alt="Trenton vonHartitzsch"
          className="w-full h-full object-contain object-bottom scale-[1.3] -translate-y-[-35px]"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#f0e6d0] font-bold text-base mb-1">Trenton vonHartitzsch</h3>
        <p className="text-[#FFA500] text-xs font-medium mb-3">Software Engineer</p>
        <p className="text-[#a89070] text-xs leading-relaxed">
          NYU CS & Data Science, Dec 2025. Julius Silver Scholar. 4-year varsity swim captain.
        </p>
      </div>
    </motion.div>

    {/* At a Glance */}
    <motion.div
      className="rounded-xl p-5 flex flex-col border border-[#FFA500]/10"
      style={{ background: 'linear-gradient(135deg, #1c1410 0%, #181008 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-[#f0e6d0] font-bold text-sm mb-3">At a Glance</h3>
      <div className="space-y-2.5 text-xs flex-1 flex flex-col justify-center">
        <div className="flex justify-between">
          <span className="text-[#8a7560]">Education</span>
          <span className="text-[#d4c4a8] text-right">NYU, BA in CS & Data Science</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8a7560]">GPA</span>
          <span className="text-[#FFA500] font-semibold">3.74</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8a7560]">Graduating</span>
          <span className="text-[#d4c4a8]">December 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8a7560]">Location</span>
          <span className="text-[#d4c4a8]">New York, NY</span>
        </div>
      </div>
    </motion.div>

    {/* Tech Stack */}
    <motion.div
      className="rounded-xl py-4 flex flex-col border border-[#6366f1]/10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #12121e 0%, #0e0e18 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-[#d0d0f0] font-bold text-sm mb-3 px-5">Tech Stack</h3>
      <div className="relative overflow-hidden flex-1 flex items-center">
        <div
          className="marquee-track flex w-max gap-6 px-2"
          style={{ willChange: 'transform' }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex flex-col items-center gap-1.5 shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-default"
              style={{ width: 48 }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7"
                loading="lazy"
              />
              <span className="text-[9px] text-[#b0b0d0] whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

  </div>
);

const ContactInfo: React.FC = () => (
  <motion.div
    className="flex flex-col justify-center"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2
      className="font-black text-[#e0e0e0] leading-[0.92] mb-6"
      style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
    >
      Let's work<br />
      together
    </h2>

    <p className="text-[#999] text-sm leading-relaxed mb-8 max-w-sm">
      Open to full-time roles, internships, and select freelance projects.
      Have something in mind? Send me an email or reach out below.
    </p>

    <a
      href="mailto:vonH.trent@gmail.com"
      className="inline-block text-[#e0e0e0] font-mono text-sm underline underline-offset-4
                 decoration-[#FFA500] hover:text-[#FFA500] transition-colors duration-300 mb-2 w-fit"
    >
      vonH.trent@gmail.com
    </a>

    <a
      href="/vonHartitzsch_Trenton_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#FFA500] text-black px-6 py-2.5 rounded text-xs tracking-[0.15em] uppercase font-bold
                 hover:bg-[#ffb733] transition-all duration-300 mt-4 mb-8 w-fit"
    >
      Download Resume
    </a>

    <div className="flex flex-col gap-2">
      {socialLinks.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#FFA500] transition-colors duration-300 text-sm w-fit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 * i }}
        >
          {link.label}
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-28 pb-6 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Desktop layout: contact left, cards right */}
        <div className="hidden lg:grid lg:grid-cols-[2fr_3fr] gap-16">
          <ContactInfo />
          <SnapshotCards />
        </div>

        {/* Mobile layout: cards first (like testimonials in template), then contact */}
        <div className="lg:hidden flex flex-col gap-10">
          <SnapshotCards />
          <ContactInfo />
        </div>

        <div className="text-center mt-8 text-[#666] text-xs tracking-wide">
          Built by Trenton vonHartitzsch &middot; {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Contact;
