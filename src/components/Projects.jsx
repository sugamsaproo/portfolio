import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Advanced Covid-19 Data Analysis',
    description: 'Leveraged SQL Server to analyze real-time Covid-19 data, deriving meaningful insights using advanced database techniques.',
    tech: ['SQL Server', 'Data Analysis'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'SQL Data Cleaning Mastery',
    description: 'Specialized in cleaning and refining raw data within SQL environments, ensuring highest data quality and integrity.',
    tech: ['SQL', 'Data Cleaning', 'ETL'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Dynamic Tableau Insights',
    description: 'Built interactive dashboards highlighting Covid-19 trends, patterns, and advanced data visualization for decision-making.',
    tech: ['Tableau', 'Power BI', 'Excel'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
