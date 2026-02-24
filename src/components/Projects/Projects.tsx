import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Phone3D from './Phone3D';

type ProjectCategory = 'All' | 'Data Visualization' | 'Web Development' | 'ML / Data Science';

interface ProjectItem {
  title: string;
  description: string;
  techList: string[];
  image: string;
  github: string;
  showGithubLink?: boolean;
  category: Exclude<ProjectCategory, 'All'>;
}

const projectList: ProjectItem[] = [
  {
    title: 'Clinical Named Entity Recognition Platform',
    description:
      'System to turn raw medical documents into structured insights for clinical analytics. Streamlined parsing, BIO tagging, and tokenization; fine-tuned Bio_ClinicalBERT with layer-wise decay and adversarial training for stronger entity recognition.',
    techList: ['Python', 'NLP', 'Hugging Face', 'Bio_ClinicalBERT'],
    image: '/NER.png',
    github: '#',
    showGithubLink: false,
    category: 'ML / Data Science',
  },
  {
    title: 'Sentiment-Driven Quantitative Trading Strategy',
    description:
      'Quantitative strategy linking equity movements to commodities via sentiment analysis, correlation models, and ML signal generation. Multi-model pipeline with PostgreSQL for querying and benchmarking.',
    techList: ['Python', 'Machine Learning', 'PostgreSQL', 'Sentiment Analysis'],
    image: '/sentiment_analysis.png',
    github: '#',
    showGithubLink: false,
    category: 'Data Visualization',
  },
  {
    title: 'RentRoute',
    description:
      'Full-stack NYC rental finder by commute time and proximity to groceries, schools, and gyms. React, Flask, and TravelTime API for real-time search; ML-driven recommendations and Seaborn visualizations for housing trends.',
    techList: ['React.js', 'Flask', 'Python', 'TravelTime API', 'Seaborn'],
    image: '/nobg_rentroute.png',
    github: 'https://github.com/CallEmUp/RentRoute',
    showGithubLink: true,
    category: 'Web Development',
  },
  {
    title: 'Spotify Song Data Analysis',
    description:
      'Analysis of 20k+ Spotify tracks with Python, Pandas, and Scikit-Learn. Feature engineering and ML to uncover popularity drivers; automated preprocessing and visualizations for trend insights.',
    techList: ['Python', 'Pandas', 'Scikit-Learn', 'Seaborn', 'Matplotlib'],
    image: '/spotify.png',
    github: 'https://github.com/CallEmUp/spotifySongAnalysis',
    showGithubLink: true,
    category: 'Data Visualization',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This site, a portfolio built with React to showcase projects and experience. Focus on clear layout and smooth interactions.',
    techList: ['React', 'TypeScript', 'CSS', 'Framer Motion'],
    image: '/personal_portfolio.png',
    github: 'https://github.com/CallEmUp/personal-portfolio',
    showGithubLink: true,
    category: 'Web Development',
  },
  {
    title: 'Django & React Notes App',
    description:
      'Notes app with a Django backend and React frontend. RESTful API for CRUD operations and a simple, responsive UI.',
    techList: ['React', 'Django', 'Python', 'REST API'],
    image: '/notes_app.png',
    github: 'https://github.com/CallEmUp/djangoReactNotes',
    showGithubLink: true,
    category: 'Web Development',
  },
];

const FILTERS: { label: ProjectCategory }[] = [
  { label: 'All' },
  { label: 'Data Visualization' },
  { label: 'Web Development' },
  { label: 'ML / Data Science' },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface CardLayout {
  gridColumn: string;
  gridRow: string;
  isLarge: boolean;
}

function computeGridLayout(count: number): CardLayout[] {
  const layout: CardLayout[] = [];
  let idx = 0;
  let row = 1;
  let phase = 0;

  while (idx < count) {
    if (phase === 0 || phase === 2) {
      for (let c = 0; c < 3 && idx < count; c++) {
        layout.push({ gridColumn: `${c + 1}`, gridRow: `${row} / span 2`, isLarge: false });
        idx++;
      }
      row += 2;
    } else {
      const largeCol = phase === 1 ? '1 / span 2' : '2 / span 2';
      const smallCol = phase === 1 ? '3' : '1';
      const start = row;

      if (idx < count) { layout.push({ gridColumn: largeCol, gridRow: `${start} / span 3`, isLarge: true }); idx++; }
      if (idx < count) { layout.push({ gridColumn: largeCol, gridRow: `${start + 3} / span 3`, isLarge: true }); idx++; }
      if (idx < count) { layout.push({ gridColumn: smallCol, gridRow: `${start} / span 2`, isLarge: false }); idx++; }
      if (idx < count) { layout.push({ gridColumn: smallCol, gridRow: `${start + 2} / span 2`, isLarge: false }); idx++; }
      if (idx < count) { layout.push({ gridColumn: smallCol, gridRow: `${start + 4} / span 2`, isLarge: false }); idx++; }

      row = start + 6;
    }
    phase = (phase + 1) % 4;
  }
  return layout;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectList;
    return projectList.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const gridLayout = useMemo(() => computeGridLayout(filteredProjects.length), [filteredProjects.length]);

  const counts = useMemo(() => {
    const all = projectList.length;
    const dataViz = projectList.filter((p) => p.category === 'Data Visualization').length;
    const webDev = projectList.filter((p) => p.category === 'Web Development').length;
    const ml = projectList.filter((p) => p.category === 'ML / Data Science').length;
    return { All: all, 'Data Visualization': dataViz, 'Web Development': webDev, 'ML / Data Science': ml };
  }, []);

  return (
    <section id="projects" className="pt-32 pb-16 px-6 overflow-x-clip">
      <div className="max-w-[1100px] mx-auto">

        {/* ─── Featured Section: fills viewport on mobile ─── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 items-start mb-8 md:mb-[-102px]
                        min-h-[calc(100vh-10rem)] md:min-h-0 flex-col justify-between">

          {/* Left half: heading + description */}
          <div className="flex flex-col justify-between md:min-h-[620px] md:pr-12">
            <div>
              <motion.h2
                className="font-black text-[#e0e0e0] leading-[0.92] mb-10"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                My<br />
                <span className="text-[#FFA500]">Work</span>
              </motion.h2>

              <motion.p
                className="text-[#999] text-sm leading-relaxed max-w-[380px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Built production platforms handling real payments, reservations,
                and mobile apps using React and TypeScript.
                From full-stack web to ML pipelines and data-driven
                trading strategies, I ship things that work.
              </motion.p>
            </div>
          </div>

          {/* Right half: featured info + phone */}
          <div className="relative md:min-h-[620px]">
            {/* Phone - on mobile it shows centered above featured text */}
            <motion.div
              className="md:absolute md:top-[-50px] md:right-[20px] flex justify-center order-first md:order-none"
              style={{ zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Phone3D />
            </motion.div>

            {/* Featured project card */}
            <motion.div
              className="relative z-10 md:mt-auto md:pt-[130px] flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://tamalsen.dev/wp-content/uploads/2021/07/right-side-arrow.png"
                alt=""
                width={512}
                height={512}
                decoding="async"
                className="w-20 h-20 md:w-60 md:h-24 mb-6 hidden md:block flex-shrink-0 object-contain"
                style={{
                  filter: 'sepia(1) saturate(4) hue-rotate(-27deg) brightness(0.9)',
                }}
              />

              <p className="text-[#FFA500] text-sm font-medium mb-2">
                Featured Project
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#e0e0e0] mb-3">
                BookTheBars
              </h3>
              <a
                href="https://www.bookthebars.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FFA500] text-black px-8 py-3.5 rounded-lg text-sm font-semibold
                           hover:bg-[#e59400] transition-colors duration-300 no-underline"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </div>

        {/* ─── Filter by ─── */}
        <div className="portfolio-sorting text-left mb-8 mt-16 md:mt-0">
          <ul className="list-none flex flex-wrap items-baseline gap-x-1 gap-y-2 text-sm p-0 m-0">
            <li className="text-[#999] mr-1">Filter by</li>
            {FILTERS.map(({ label }, idx) => {
              const count = counts[label];
              const isActive = activeFilter === label;
              return (
                <li key={label} className="inline flex items-baseline gap-x-1">
                  {idx > 0 && <span className="text-[#555]">/</span>}
                  <button
                    type="button"
                    onClick={() => setActiveFilter(label)}
                    className={`${isActive ? 'active text-[#FFA500]' : 'text-[#999] hover:text-[#e0e0e0]'} font-medium transition-colors bg-transparent border-0 p-0 cursor-pointer`}
                  >
                    <span className="name">{label}</span>{' '}
                    <span className="num text-[#666]">{String(count).padStart(2, '0')}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ─── Portfolio grid: Tetris on desktop, single-col on mobile ─── */}
        <div
          className="hidden md:grid grid-cols-3 gap-4"
          style={{ gridAutoRows: '150px' }}
        >
          {filteredProjects.map((project, i) => {
            const { gridColumn, gridRow, isLarge } = gridLayout[i];
            const projectHref = project.github !== '#' ? project.github : '#';
            return (
              <motion.div
                key={project.title}
                className="rounded-lg overflow-hidden group bg-[#1a1a1a] border border-[#2a2a2a]
                           hover:border-[#FFA500]/30 hover:-translate-y-0.5 transition-all duration-300
                           flex flex-col min-h-0"
                style={{ gridColumn, gridRow }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <div className="portfolio-item-image relative flex-1 min-h-0 bg-[#0d0d0d]">
                  <a href={projectHref} className="block w-full h-full" target={project.github !== '#' ? '_blank' : undefined} rel={project.github !== '#' ? 'noopener noreferrer' : undefined}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      decoding="async"
                    />
                  </a>
                  {project.showGithubLink && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-[#999] hover:text-[#FFA500] transition-colors opacity-0 group-hover:opacity-100 duration-300 p-1.5 rounded bg-[#1a1a1a]/80"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
                <div className={`portfolio-item-details text-left px-3 bg-[#141414] flex-shrink-0 ${isLarge ? 'py-3' : 'py-2'}`}>
                  <h3 className="portfolio-item-headline font-bold text-white truncate text-xs sm:text-sm" title={project.title}>
                    {project.title}
                  </h3>
                  <div className="category-holder mt-0.5">
                    <span className="category text-[#888] text-[10px] sm:text-xs">{project.category}</span>
                  </div>
                  <div className="show-project mt-2">
                    <a href={projectHref} className="show-project-link text-[#FFA500] hover:underline text-xs font-medium" target={project.github !== '#' ? '_blank' : undefined} rel={project.github !== '#' ? 'noopener noreferrer' : undefined}>
                      Show project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Mobile single-column grid ─── */}
        <div className="md:hidden flex flex-col gap-5">
          {filteredProjects.map((project, i) => {
            const projectHref = project.github !== '#' ? project.github : '#';
            return (
              <motion.div
                key={project.title}
                className="rounded-lg overflow-hidden group bg-[#1a1a1a] border border-[#2a2a2a]
                           hover:border-[#FFA500]/30 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <div className="relative w-full aspect-[16/10] bg-[#0d0d0d]">
                  <a href={projectHref} className="block w-full h-full" target={project.github !== '#' ? '_blank' : undefined} rel={project.github !== '#' ? 'noopener noreferrer' : undefined}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-3"
                      decoding="async"
                    />
                  </a>
                  {project.showGithubLink && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-[#999] hover:text-[#FFA500] transition-colors p-1.5 rounded bg-[#1a1a1a]/80"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
                <div className="text-left px-4 py-3 bg-[#141414]">
                  <h3 className="font-bold text-white text-sm" title={project.title}>
                    {project.title}
                  </h3>
                  <span className="text-[#888] text-xs mt-0.5 block">{project.category}</span>
                  <a href={projectHref} className="text-[#FFA500] hover:underline text-xs font-medium mt-2 inline-block" target={project.github !== '#' ? '_blank' : undefined} rel={project.github !== '#' ? 'noopener noreferrer' : undefined}>
                    Show project
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
