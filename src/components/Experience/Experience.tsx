import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  company: string;
  companyLink: string;
  title: string;
  date: string;
  location: string;
  description: string;
  tech: string[];
  logo?: string;
  logoBg?: string;
}

const experienceItems: ExperienceItem[] = [
  {
    company: 'Book The Bars LLC',
    companyLink: 'https://www.bookthebars.com/',
    title: 'Software Engineer',
    date: 'August 2024 - Present',
    location: 'New York, NY',
    description:
      'Building and launching a reservation booking platform with venue subscriptions and payment integration. Shipping full-stack features in React/TypeScript, integrating end-to-end payment flows, and extending the platform to native iOS and Android.',
    tech: ['React', 'TypeScript', 'Node.js', 'iOS', 'Android'],
    logo: '/btb-logo.png',
    logoBg: '#ffffff',
  },
  {
    company: 'Flite City Corporation',
    companyLink: 'https://www.flite.city/',
    title: 'Data Science Intern',
    date: 'May 2025 - August 2025',
    location: 'New York, NY',
    description:
      'Developing an AI assistant for an event planning and ticketing platform. Fine-tuning LLMs with LoRA, building a RAG agent with LangChain, LangGraph, and Redis, and deploying real-time analytics dashboards in React and Plotly.',
    tech: ['LangChain', 'LangGraph', 'Redis', 'React', 'Plotly'],
    logo: '/flite-logo.png',
  },
  {
    company: 'LD Kerns Contractors',
    companyLink: 'https://ldkerns.com/',
    title: 'Software Engineering Intern',
    date: 'June 2024 - May 2025',
    location: 'Tulsa, OK',
    description:
      'Redesigning internal sites, migrating the company website from WordPress to Flask + React, automating PostgreSQL backup/restore, and building Python tooling for server health checks.',
    tech: ['Flask', 'React', 'PostgreSQL', 'Python'],
    logo: '/ldk-logo.png',
  },
];

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="experience" className="pt-12 pb-28 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.h2
          className="font-black text-[#e0e0e0] leading-[0.92] mb-16"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional<br />Experience
        </motion.h2>

        <div className="space-y-3 text-left">
          {experienceItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-lg cursor-pointer
                             transition-all duration-300 border-0 text-left group border-l-4 border-l-[#FFA500]"
                  style={{ background: '#1a1a1a' }}
                >
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg truncate pr-4">
                    {item.title} @ {item.company}
                  </span>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[#999] font-medium text-sm hidden sm:block">
                      {item.date}
                    </span>
                    <span className="text-[#FFA500] text-2xl font-light leading-none w-6 text-center select-none">
                      {isOpen ? '\u2013' : '+'}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#141414] rounded-b-lg px-6 py-6 mt-[-4px] border border-[#2a2a2a] border-t-0">
                        <div className="flex gap-6">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm">
                              <span className="flex items-center gap-1.5 text-[#bbb]">
                                <svg className="w-4 h-4 text-[#FFA500]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {item.location}
                              </span>
                              {item.companyLink !== '#' && (
                                <a
                                  href={item.companyLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 text-[#bbb] hover:text-[#FFA500] transition-colors"
                                >
                                  <svg className="w-4 h-4 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                  {item.companyLink.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                </a>
                              )}
                            </div>

                            <p className="text-[#ccc] text-sm leading-relaxed mb-5">
                              {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {item.tech.map((t, j) => (
                                <span
                                  key={j}
                                  className="text-xs px-4 py-1.5 rounded-full border border-[#444] text-[#ddd] font-medium
                                             bg-transparent hover:border-[#FFA500] transition-colors"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {item.logo && (
                            <div
                              className="hidden sm:flex items-center justify-center shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden"
                              style={item.logoBg ? { backgroundColor: item.logoBg } : undefined}
                            >
                              <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="w-full h-full object-contain p-1 opacity-90"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
