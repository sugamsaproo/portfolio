import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024 - Present',
    role: 'ERP Executive',
    company: 'Singhania University',
    description: 'ERP System Implementation, Dashboard Creation & Data Visualization'
  },
  {
    year: '2022 - 2024',
    role: 'Lab Analyst',
    company: 'Suez India Pvt Ltd',
    description: 'Data cleaning, analysis, dashboard reporting & quality assurance'
  },
  {
    year: '2021 - 2022',
    role: 'Lab Assistant',
    company: 'Medinnbelle Herbalcare Pvt. Ltd.',
    description: 'Laboratory operations & data quality management'
  },
  {
    year: '2018 - 2021',
    role: 'B.Tech Biotechnology',
    company: 'DCR University',
    description: 'Graduated with honors in Biotechnology'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
