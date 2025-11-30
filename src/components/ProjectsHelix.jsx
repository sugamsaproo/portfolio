import React from "react";
import { motion } from "framer-motion";

const ProjectsHelix = () => {
  const projects = [
    { name: "ERP Implementation", desc: "Enterprise system at Singhania University", color: "#00d9ff" },
    { name: "Covid-19 Analytics", desc: "Tableau dashboard for epidemiological data", color: "#ff6b9d" },
    { name: "Lab Management System", desc: "Project management framework for biotech", color: "#ffd700" },
  ];

  return (
    <section className="projects-helix-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Notable Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.color}` }}
          >
            <div className="project-marker" style={{ borderColor: project.color }}></div>
            <h3 style={{ color: project.color }}>{project.name}</h3>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsHelix;
