import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <motion.div 
          className="gallery-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="gallery-image-container">
            <img src="/assets/sugam_lab.jpg" alt="Sugam in Microbiology Lab" className="gallery-image" />
            <div className="gallery-overlay">
              <p>Snapshot from the microbiology workspace where innovation meets research excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
