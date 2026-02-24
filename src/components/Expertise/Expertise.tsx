import React from 'react';
import { motion } from 'framer-motion';

interface ExpertiseCard {
  icon: React.ReactNode;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
}

const cards: ExpertiseCard[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Software',
    highlight: 'Development',
    subtitle: 'React, TypeScript, Python, Flask, Django',
    description:
      'Experienced in full-stack web and mobile. Payment integrations, subscription platforms, and scalable APIs shipped to production.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
    title: 'ML & Data',
    highlight: 'Science',
    subtitle: 'PyTorch, Scikit-Learn, Pandas, NLP',
    description:
      'Quantitative strategies, clinical NER, feature engineering, and analytics dashboards. Turning raw data into decisions.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: 'AI & LLM',
    highlight: 'Engineering',
    subtitle: 'LangChain, LangGraph, RAG, LoRA',
    description:
      'Building intelligent agents with memory and tool use. Fine-tuning LLMs and deploying real-time observability dashboards.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 * i },
  }),
};

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          className="font-black text-[#e0e0e0] leading-[0.92] mb-16"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-[#FFA500]">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#FFA500]/30 hover:-translate-y-1
                         transition-all duration-300 group"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-[#FFA500] opacity-80 group-hover:opacity-100 transition-opacity">
                  {card.icon}
                </div>
                <div>
                  <div className="text-lg font-bold text-[#e0e0e0] leading-tight">
                    <span className="underline decoration-[#FFA500] decoration-2 underline-offset-2">{card.title}</span>
                    {' '}{card.highlight}
                  </div>
                  <div className="text-[#777] text-[11px] mt-0.5 whitespace-nowrap">{card.subtitle}</div>
                </div>
              </div>

              <p className="text-[#999] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
