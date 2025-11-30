import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <b>MSc Project Management Candidate at UCD Michael Smurfit Graduate Business School</b> &mdash;
                 With a background spanning lab benches to boardrooms, I blend scientific rigor and enterprise strategy to revolutionize biotech project delivery.
 
              </p>
              <p>
                From designing innovative dashboards in <strong>Tableau</strong> and <strong>Power BI</strong> to 
                leading effective project management in laboratory environments, I thrive on data-driven problem-solving 
                and operational excellence.
              </p>
              <p>
                My mission is to bridge the gap between cutting-edge laboratory science and intelligent data systems, 
                ensuring data integrity, automation, and actionable insights that drive research innovation forward.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
