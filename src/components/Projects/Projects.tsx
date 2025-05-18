import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../shared/SectionHeading.css';

interface ProjectItem {
  title: string;
  description: string;
  techList: string[];
  image: string;
  github: string;
  showGithubLink?: boolean;
}

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeInOut" 
    },
  },
  exit: {
    opacity: 0,
    y: -75,
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    },
  },
};

const Projects: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isScrollingActive, setIsScrollingActive] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderSticky, setIsHeaderSticky] = useState(true);

  const [headerProps, setHeaderProps] = useState({
    position: 'sticky' as 'sticky' | 'absolute' | 'static',
    top: '80px',
    transform: 'translateY(0)',
    opacity: 1,
    zIndex: 10
  });

  const projectsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const lastHeaderPosition = useRef(0);
  const projectCardRef = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement>(null);

  const projectList: ProjectItem[] = [
    {
      title: "Clinical Named Entity Recognition Platform",
      description: "Built a scalable clinical NER pipeline on MIMIC-IV, automating CSV ingestion, hierarchical BIO-tag annotation, and optimized tokenization; fine-tuned Bio_ClinicalBERT with layer-wise learning rate decay and adversarial domain adaptation to drive significant entity-level F1 gains.",
      techList: ["Python", "NLP", "Hugging Face", "Transformers"],
      image: "/NER.png",
      github: "#",
      showGithubLink: false
    },
    {
      title: "Sentiment-Driven Quantitative Trading Strategy",
      description: "Developed a quantitative trading strategy that forecasts equity–commodity movements via a multi‑model sentiment analysis pipeline, correlation modeling, and machine‑learning signal generation; integrated all outputs into PostgreSQL for efficient querying and benchmarked performance against traditional strategies.",
      techList: ["Python", "Machine Learning", "PostgreSQL", "Sentiment Analysis"],
      image: "/sentiment_analysis.png",
      github: "#",
      showGithubLink: false
    },
    {
      title: "RentRoute",
      description: "Find your ideal NYC apartment based on commute time with RentRoute. My app uses real-time data to match you with rentals that fit your preferred travel time and transportation mode, making apartment hunting more efficient. Say goodbye to long commutes and hello to a home that works for your life. RentRoute—your next home, just a ride away.",
      techList: ["Python", "Folium", "Machine Learning", "Seaborn", "React.js", "Flask"],
      image: "/nobg_rentroute.png",
      github: "https://github.com/CallEmUp/RentRoute",
      showGithubLink: true
    },
    {
      title: "Spotify Song Data Analysis",
      description: "Source code and full analysis on Spotify songs to provide deeper insight into what makes songs popular in an attempt to help up and coming artists. Applied feature engineering and model evaluation techniques to improve prediction accuracy and uncover factors driving music trends.",
      techList: ["Python", "Pandas", "Numpy", "Scikit-Learn", "Machine Learning"],
      image: "/spotify.png",
      github: "https://github.com/CallEmUp/spotifySongAnalysis",
      showGithubLink: true
    },
    {
      title: "Personal Portfolio",
      description: "Source code of my current portfolio web page. Developed a personal portfolio website highlighting strengths and projects as a developer.",
      techList: ["React", "Node.JS", "CSS", "JavaScript"],
      image: "/personal_portfolio.png",
      github: "https://github.com/CallEmUp/personal-portfolio",
      showGithubLink: true
    },
    {
      title: "Django & React Notes App",
      description: "Source code of my notes app made with Django and React, utilizing RESTful API that efficiently manages CRUD operations for notes.",
      techList: ["React", "Django", "CSS", "HTML", "Python"],
      image: "/notes_app.png",
      github: "https://github.com/CallEmUp/djangoReactNotes",
      showGithubLink: true
    }
  ];

  const sectionHeight = projectList.length * 80 + 30;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !projectsRef.current || !headerRef.current || !contentRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionBottom) {
        setIsProjectsVisible(true);

        const scrollIntoSection = scrollPosition - sectionTop + windowHeight / 2;
        if (scrollIntoSection > 0) {
          const projectHeight = 0.8 * windowHeight;
          const newIndex = Math.min(
            Math.floor(scrollIntoSection / projectHeight),
            projectList.length - 1
          );

          if (newIndex !== activeProjectIndex) {
            setActiveProjectIndex(newIndex);
            setIsScrollingActive(true);
          }

          if (newIndex === projectList.length - 1) {
            const headerRect = headerRef.current.getBoundingClientRect();

            const currentHeaderPosition = headerRect.top + window.scrollY;

            if (activeProjectIndex !== projectList.length - 1) {
              lastHeaderPosition.current = currentHeaderPosition;
              console.log('Captured header position:', lastHeaderPosition.current);
            }

            setHeaderProps({
              position: 'absolute',
              top: `${lastHeaderPosition.current}px`,
              transform: 'none',
              opacity: 1,
              zIndex: 10
            });

            console.log('Using header position:', lastHeaderPosition.current);
          } else {
            setHeaderProps({
              position: 'sticky',
              top: '80px',
              transform: 'translateY(0)',
              opacity: 1,
              zIndex: 10
            });

            if (headerRef.current) {
              const headerRect = headerRef.current.getBoundingClientRect();
              lastHeaderPosition.current = headerRect.top + window.scrollY;
            }
          }
        }
      } else {
        setIsProjectsVisible(false);
        setIsScrollingActive(false);

        if (scrollPosition < sectionTop) {
          setHeaderProps({
            position: 'sticky',
            top: '80px',
            transform: 'translateY(0)',
            opacity: 1,
            zIndex: 10
          });
        } else {
          setHeaderProps({
            position: 'absolute',
            top: `${sectionBottom}px`,
            transform: 'translateY(-100%)',
            opacity: 0,
            zIndex: 10
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProjectIndex, projectList.length]);

  useEffect(() => {
    if (!projectCardRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(!entry.isIntersecting);
        setIsHeaderSticky(!entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(projectCardRef.current);
    return () => observer.disconnect();
  }, [activeProjectIndex]);

  const isSpotifyProject = (i: number) =>
    projectList[i].title === "Spotify Song Data Analysis";

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="Section-sc-1uxj9e4-0 featured__StyledContainer-m38bt7-0 EYdbS"
      style={{
        margin: '0 auto',
        padding: '60px 0',
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: `${sectionHeight}vh`,
        position: 'relative'
      }}
    >
      <motion.h2
        ref={headerRef}
        className="section-heading centered"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isHeaderVisible ? 1 : 0, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: isHeaderSticky ? 'sticky' : 'static',
          top: isHeaderSticky ? '80px' : undefined,
          zIndex: 10,
          width: '100%',
          textAlign: 'center',
          marginBottom: 0,
          background: 'inherit'
        }}
      >
        <span className="text-secondary">PROJECTS</span>
      </motion.h2>

      <div
        ref={projectsRef}
        style={{
          height: '85vh',
          width: '100%',
          position: 'sticky',
          top: '100px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: headerProps.position === 'absolute' ? '20px' : '-5px',
          transition: 'margin-top 0.3s ease'
        }}
      >
        <div
          ref={contentRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIndex}
              variants={projectCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                width: '100%',
                paddingTop: 0
              }}
            >
              {(() => {
                const project = projectList[activeProjectIndex];
                const isOdd = activeProjectIndex % 2 !== 0;
                const isLast = activeProjectIndex === projectList.length - 1;
                return (
                  <motion.div
                    ref={isLast ? lastProjectRef : projectCardRef}
                    className="featured__StyledProject-m38bt7-9 bBGfSj"
                    style={{
                      display: 'grid',
                      gap: '10px',
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      alignItems: 'center',
                      visibility: 'visible',
                      opacity: 1,
                      paddingTop: 0
                    }}
                  >
                    <div
                      className="featured__StyledContent-m38bt7-1 cfqDAG"
                      style={{
                        position: 'relative',
                        gridColumn: isOdd ? '7 / -1' : '1 / 7',
                        gridRow: '1 / -1',
                        textAlign: isOdd ? 'right' : 'left',
                        zIndex: 2
                      }}
                    >
                      <div
                        className="featured__StyledLabel-m38bt7-2 gRbEGM"
                        style={{
                          fontSize: '13px',
                          fontWeight: 400,
                          color: '#FFA500',
                          fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                          margin: 0,
                          marginBottom: '10px'
                        }}
                      >
                        Featured Project
                      </div>

                      <h4
                        className="featured__StyledProjectName-m38bt7-3 ffQPbE"
                        style={{
                          fontSize: '28px',
                          margin: 0,
                          marginBottom: '20px',
                          color: '#f0f0f0'
                        }}
                      >
                        {project.title}
                      </h4>

                      <div
                        className="featured__StyledDescription-m38bt7-4 dcVFes"
                        style={{
                          boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                          transition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                          position: 'relative',
                          zIndex: 2,
                          padding: '25px',
                          backgroundColor: '#272727',
                          color: '#c0c0c0',
                          fontSize: '18px',
                          borderRadius: '3px'
                        }}
                      >
                        <p style={{ margin: 0 }}>{project.description}</p>
                      </div>

                      <ul
                        className="featured__StyledTechList-m38bt7-5 gAthGn"
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          position: 'relative',
                          zIndex: 2,
                          margin: '25px 0 10px',
                          padding: 0,
                          listStyle: 'none',
                          justifyContent: isOdd ? 'flex-end' : 'flex-start'
                        }}
                      >
                        {project.techList.map((tech, i) => (
                          <li
                            key={i}
                            style={{
                              fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                              fontSize: '13px',
                              color: '#FFA500',
                              marginRight: isOdd ? 0 : '20px',
                              marginLeft: isOdd ? '20px' : 0,
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {project.showGithubLink && (
                        <div
                          className="featured__StyledLinkWrapper-m38bt7-6 iAXaXC"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            marginTop: '10px',
                            justifyContent: isOdd ? 'flex-end' : 'flex-start'
                          }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="GitHub Link"
                            style={{
                              padding: '10px',
                              color: '#c0c0c0',
                              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                              marginRight: isOdd ? 0 : '10px',
                              marginLeft: isOdd ? '10px' : 0
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              width="22"
                              height="22"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>

                    <div
                      className="featured__StyledImgContainer-m38bt7-8 elimof"
                      style={{
                        gridColumn: isOdd ? '1 / 8' : '6 / -1',
                        gridRow: '1 / -1',
                        position: 'relative',
                        zIndex: 1,
                        height: '100%',
                        borderRadius: '2px',
                        marginRight: isOdd ? 0 : '-10px',
                        marginLeft: isOdd ? '-10px' : 0,
                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
                      }}
                    >
                      <div
                        className="featured__StyledFeaturedImg-m38bt7-7 jMpFlQ gatsby-image-wrapper"
                        style={{
                          position: 'relative',
                          overflow: 'hidden',
                          height: '100%',
                          width: '100%',
                          verticalAlign: 'middle'
                        }}
                      >
                        <div style={{ width: '100%', paddingBottom: '56%' }} />
                        <img
                          aria-hidden="true"
                          src={project.image}
                          alt={project.title}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: isSpotifyProject(activeProjectIndex) ? '86%' : '100%',
                            objectFit: 'contain',
                            objectPosition: isSpotifyProject(activeProjectIndex) ? 'center top' : 'center center',
                            opacity: 1,
                            transition: 'opacity 500ms ease 0s',
                            filter: 'brightness(100%)',
                            borderRadius: '2px',
                            mixBlendMode: 'normal',
                            backgroundColor: '#272727'
                          }}
                        />
                        <picture>
                          <img
                            width="500"
                            sizes="(max-width: 700px) 100vw, 700px"
                            decoding="async"
                            src={project.image}
                            alt=""
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: isSpotifyProject(activeProjectIndex) ? '86%' : '100%',
                              objectFit: 'contain',
                              objectPosition: isSpotifyProject(activeProjectIndex) ? 'center top' : 'center center',
                              opacity: 0,
                              transition: 'opacity 500ms ease 0s',
                              transitionDelay: '500ms'
                            }}
                          />
                        </picture>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {isScrollingActive && isProjectsVisible && (
            <div
              style={{
                position: 'absolute',
                right: '-30px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                zIndex: 20
              }}
            >
              {projectList.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Navigate to project ${idx + 1}`}
                  onClick={() => {
                    if (!sectionRef.current) return;
                    const sectTop = sectionRef.current.offsetTop;
                    const projOff = idx * (0.8 * window.innerHeight) + 60;
                    window.scrollTo({ top: sectTop + projOff, behavior: 'smooth' });
                  }}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: activeProjectIndex === idx ? '#FFA500' : '#555',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
