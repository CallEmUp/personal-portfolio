import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../shared/SectionHeading.css';

// Add CSS for hover effect
const tabButtonHoverStyle = `
  .tab-button {
    transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .tab-button:hover {
    color: #FFA500 !important;
  }
`;

interface ExperienceItem {
  company: string;
  companyLink: string;
  title: string;
  date: string;
  description: string[];
}

const Experience: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const highlighterRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const experienceItems: ExperienceItem[] = [
    {
      company: "L.D. Kerns Contractors",
      companyLink: "https://ldkerns.com/",
      title: "Technology Intern",
      date: "June 2024 - Current",
      description: [
        "Supported and enhanced L.D. Kerns Contractors digital infrastructure by implementing new technologies",
        "Collaborated on web development projects within the construction industry",
        "Gained experience in system administration and project management",
        "Technologies: CSS, Flask, PostgreSQL, Python"
      ]
    },
    {
      company: "Freelance",
      companyLink: "#",
      title: "Web Developer",
      date: "2022 - Current",
      description: [
        "Designed, implemented, and monitored web pages, plugins, and functionality for small businesses",
        "Focused on continuous improvement of client websites and applications",
        "Provided technical support and maintenance for client websites",
        "Technologies: HTML, JavaScript, React"
      ]
    }
  ];

  // Handle scroll adjustment
  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#experience' && sectionRef.current) {
        setTimeout(() => {
          const currentScrollPosition = window.scrollY;
          window.scrollTo({
            top: currentScrollPosition + 70, // Scroll 70px more
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure the browser's default scroll completes
      }
    };

    // Check hash on mount
    if (window.location.hash === '#experience') {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update highlight position on tab change
  useEffect(() => {
    if (tabsRef.current.length === 0 || !highlighterRef.current) return;
    
    const activeTab = tabsRef.current[activeTabId];
    if (!activeTab) return;
    
    const { top, height } = activeTab.getBoundingClientRect();
    const tabsContainer = activeTab.parentElement?.parentElement;
    if (!tabsContainer) return;
    
    const { top: containerTop } = tabsContainer.getBoundingClientRect();
    const offset = top - containerTop;

    // Set vertical position for desktop
    highlighterRef.current.style.transform = `translateY(${offset}px)`;
    highlighterRef.current.style.height = `${height}px`;
  }, [activeTabId]);

  const sectionStyles: React.CSSProperties = {
    margin: '0 auto',
    padding: '90px 0 150px 0',
    position: 'relative',
    maxWidth: '900px',
    visibility: 'visible',
    opacity: 1,
    transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    transition: 'all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
    backgroundColor: '#272727',
    scrollMarginTop: '20px'
  };

  const tabListStyles: React.CSSProperties = {
    display: 'block',
    position: 'relative',
    width: 'max-content',
    zIndex: 3,
    padding: 0,
    margin: 0,
    listStyle: 'none'
  };

  const tabContentStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    paddingTop: 0,
    paddingLeft: '30px'
  };

  return (
    <>
      {/* Add style tag for hover effect */}
      <style>{tabButtonHoverStyle}</style>
      <section 
        id="experience" 
        ref={sectionRef}
        style={sectionStyles}
        className="erhpWX"
        data-sr-id="2"
      >
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary">WHERE I'VE WORKED</span>
        </motion.h2>

        <div className="dtPuYg jobs__StyledTabs-sc-1yvr741-1" style={{ display: 'flex', alignItems: 'flex-start' }}>
          {/* Tab list */}
          <ul 
            role="tablist" 
            aria-label="Job tabs" 
            className="fHOvBu jobs__StyledTabList-sc-1yvr741-2"
            style={{...tabListStyles, width: '180px'}}
          >
            {experienceItems.map((item, i) => (
              <li key={i} className="relative">
                <button
                  id={`tab-${i}`}
                  role="tab"
                  aria-selected={activeTabId === i}
                  aria-controls={`panel-${i}`}
                  tabIndex={activeTabId === i ? 0 : -1}
                  className={`jobs__StyledTabButton-sc-1yvr741-3 ${activeTabId === i ? 'jpEpFH' : 'jwbHuJ'} tab-button`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '48px',
                    padding: '43px 25px 2px',
                    border: 'none',
                    background: 'transparent',
                    color: activeTabId === i ? '#FFA500' : '#c0c0c0',
                    fontFamily: 'inherit',
                    fontSize: '15px',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
                  }}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                >
                  <span>{item.company}</span>
                </button>
              </li>
            ))}
            <span 
              ref={highlighterRef}
              className="bZkdqC jobs__StyledHighlight-sc-1yvr741-4"
              style={{
                display: 'block',
                width: '3px',
                height: '48px',
                borderRadius: '4px',
                backgroundColor: '#FFA500',
                position: 'absolute',
                left: 0,
                top: 21,
                zIndex: 10,
                transform: 'translateY(0px)',
                transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }}
            />
            {/* Grey background highlight that's always visible */}
            <span 
              className="jobs__StyledHighlightBackground"
              style={{
                display: 'block',
                width: '3px',
                height: experienceItems.length * 48 + 'px', // Dynamic height based on number of tabs
                borderRadius: '4px',
                backgroundColor: '#666666', // Tertiary grey color
                position: 'absolute',
                left: 0,
                top: 21,
                zIndex: 5
              }}
            />
          </ul>

          {/* Content panels */}
          <div style={{ width: '100%' }}>
            {experienceItems.map((item, i) => (
              <div
                id={`panel-${i}`}
                key={i}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                tabIndex={activeTabId === i ? 0 : -1}
                hidden={activeTabId !== i}
                className="hGSFSy jobs__StyledTabContent-sc-1yvr741-5"
                style={{...tabContentStyles, padding: '0 0 0 100px'}}
              >
                <h4 className="igRrUO jobs__StyledJobTitle-sc-1yvr741-6" style={{ fontSize: '24px', color: '#f0f0f0', marginBottom: '8px' }}>
                  <span>{item.title}</span>
                  <span className="hsfhdF jobs__StyledCompany-sc-1yvr741-7" style={{ color: '#FFA500' }}>
                    <span>&nbsp;@&nbsp;</span>
                    <a 
                      href={item.companyLink} 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      style={{ 
                        color: '#FFA500', 
                        position: 'relative',
                        textDecoration: 'none',
                      }}
                    >
                      {item.company}
                    </a>
                  </span>
                </h4>
                <h5 className="leiyZN jobs__StyledJobDetails-sc-1yvr741-8" style={{ fontSize: '14px', fontWeight: 'normal', letterSpacing: '0.05em', color: '#c0c0c0', marginBottom: '30px' }}>
                  <span>{item.date}</span>
                </h5>
                <div>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '18px' }}>
                    {item.description.map((point, index) => (
                      <li key={index} style={{ position: 'relative', paddingLeft: '35px', marginBottom: '15px' }}>
                        <span style={{ color: '#FFA500', position: 'absolute', left: 0, top: '8px', fontSize: '16px' }}>▹</span>
                        <span style={{ color: '#c0c0c0', fontSize: '16px' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience; 