import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ERP Implementation', icon: '⚙️' },
  { name: 'Excel Dashboards', icon: '📊' },
  { name: 'Tableau & Power BI', icon: '📈' },
  { name: 'SQL & Data Cleaning', icon: '🗄️' },
  { name: 'Statistical Analysis', icon: '📉' },
  { name: 'Lab Data Integrity', icon: '🔬' },
  { name: 'Python Programming', icon: '🐍' },
  { name: 'Biotech Operations', icon: '🧬' },
  { name: 'Automation', icon: '🤖' },
  { name: 'Project Management', icon: '📋' }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
