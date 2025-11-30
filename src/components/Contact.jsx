import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          
          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>sugamsaproo97@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Delhi, India</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/sugam-saproo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="footer">
        <p>© 2025 Sugam Saproo. Crafted with passion for microbiology & data science.</p>
      </div>
    </section>
  );
};

export default Contact;
