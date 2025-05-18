import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allTechnologies = [
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "AWS", icon: "devicon-amazonwebservices-original" },
  ];

  // Shuffle technologies array
  const [technologies, setTechnologies] = useState(allTechnologies);
  const shuffledRef = useRef(false);
  
  useEffect(() => {
    // Only shuffle once
    if (!shuffledRef.current) {
      shuffledRef.current = true;
      
      // Fisher-Yates shuffle algorithm
      const shuffleArray = (array: typeof allTechnologies) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };
      
      setTechnologies(shuffleArray(allTechnologies));
    }
  }, [allTechnologies]);

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl font-medium text-secondary tracking-wider mb-16">
          SKILLS
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex" style={{ width: "200%" }}>
            {/* First set */}
            <motion.div
              className="flex items-center"
              style={{ width: "50%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 0
              }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={`tech-${tech.name}-${index}`}
                  className="flex-shrink-0 mx-8"
                  style={{ width: `${100 / technologies.length}%` }}
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto">
                    <i className={`${tech.icon} text-5xl text-text-primary opacity-80 hover:text-secondary hover:opacity-100 transition-all duration-300`}></i>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless looping */}
            <motion.div
              className="flex items-center"
              style={{ width: "50%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 0
              }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={`tech-dup-${tech.name}-${index}`}
                  className="flex-shrink-0 mx-8"
                  style={{ width: `${100 / technologies.length}%` }}
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto">
                    <i className={`${tech.icon} text-5xl text-text-primary opacity-80 hover:text-secondary hover:opacity-100 transition-all duration-300`}></i>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 