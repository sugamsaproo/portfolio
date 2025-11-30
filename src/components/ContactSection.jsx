import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:sugamsaproo97@gmail.com";
  };

const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = `${process.env.PUBLIC_URL}/assets/Shivam-Sapru-FlowCV-Resume-20250721.pdf`;
  link.download = 'Sugam-Saproo-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section className="contact-section">
      <div className="floating-bg">
        <div className="float-item float-1"></div>
        <div className="float-item float-2"></div>
        <div className="float-item float-3"></div>
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">

          <div className="contact-header-text">
            <h2>Let’s Create Something Amazing</h2>
            <p className="contact-tagline">
              Open to collaborations in microbiology, project management, and analytics.
            </p>
          </div>
        </div>

        <div className="contact-actions">
          <motion.button
            className="contact-btn contact-btn-primary"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ Contact Me
          </motion.button>

          <motion.button
            className="contact-btn contact-btn-secondary"
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📥 Download Resume
          </motion.button>
        </div>

        <div className="contact-info">
          <p>📧 <strong>Email:</strong> sugamsaproo97@gmail.com</p>
          <p>📍 <strong>Location:</strong> Dublin, Ireland</p>
          <p>💼 <strong>LinkedIn:</strong> /in/sugam-saproo</p>
          <p>🔗 <strong>GitHub:</strong> github.com/sugamsaproo</p>
        </div>
      </motion.div>
    </section>
  );
}
