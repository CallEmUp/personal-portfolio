import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import '../shared/SectionHeading.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-primary relative overflow-hidden"
      style={{ paddingTop: '40px', paddingBottom: '5rem' }} // adjust top as needed
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary">WHO I AM?</span>
        </motion.h2>
        
        <div className="relative mt-12 flex items-center">
          <motion.div 
            className="relative z-10 w-full max-w-2xl flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-primary text-lg mb-6">
              I'm Trenton vonHartitzsch — a Computer Science and Data Science student at New York University with a passion for building scalable systems that solve real-world problems.
            </p>
            
            <p className="text-text-primary text-lg mb-6">
              Over the past few years, I've developed a strong foundation in backend development, machine learning, and data-driven application design. My technical toolkit includes Python, Java, SQL, and JavaScript, and I've applied these skills in both personal and academic projects, including building recommendation systems, RESTful APIs, and dynamic web applications.
            </p>
            
            <p className="text-text-primary text-lg mb-6">
              Beyond the code, I take pride in being a quick learner and a collaborative team member who thrives in fast-paced, hands-on environments. I've led development efforts, contributed to high-impact engineering projects, and love the challenge of turning complex problems into elegant solutions.
            </p>

            <p className="text-text-primary text-lg mb-6">
              Outside of tech, I also compete as a varsity student-athlete at NYU— a role that has shaped my discipline, resilience, and leadership. I enjoy problem-solving challenges, playing basketball with my friends, and constantly exploring new tools and technologies that expand what I can create.
            </p>
          </motion.div>
          
          <motion.div 
            className="z-0 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ pointerEvents: 'none', transform: 'translate(100px, 0px)' }}
          >
            <img 
              src="/boat.png" 
              alt="Photo of me" 
              style={{ width: '300px', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;