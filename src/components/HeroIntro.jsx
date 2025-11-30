import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroIntro() {
  const [showJourney, setShowJourney] = useState(false);

  const handleExploreClick = () => {
    setShowJourney(true);
  };

  const handleCloseJourney = () => {
    setShowJourney(false);
  };

  return (
    <section className="hero-intro">
      <div className="hero-bg">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Large circular profile above heading */}
        <div className="hero-avatar-wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} alt="Sugam Saproo" className="hero-avatar" />

        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient">Sugam Saproo</span>
        </h1>
        <p className="hero-subtitle">
          MSc Project Management | UCD Michael Smurfit Graduate Business School
        </p>
        <p className="hero-description">
          Where Microbiology Meets Project Excellence
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleExploreClick}>
            Explore My Journey
          </button>
          <button className="btn btn-secondary">
            Get in Touch
          </button>
        </div>
      </motion.div>

      {/* Journey overlay */}
      <AnimatePresence>
        {showJourney && (
          <motion.div
            className="journey-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="journey-panel"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                className="journey-close"
                onClick={handleCloseJourney}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="journey-title">Explore My Journey</h2>
              <div className="journey-divider"></div>

              <div className="journey-section">
                <h3>Blending science, data & projects</h3>
                <p>
                  Blending science, data and project management, I build systems
                  that turn messy operations into clear, scalable workflows.
                </p>
              </div>

              <div className="journey-section">
                <h4>Who I am</h4>
                <p>
                  I started in Biotechnology, where early lab work taught
                  analytical thinking, precise measurement and structured
                  problem‑solving that still shape how I approach complex
                  projects today.
                </p>
              </div>

              <div className="journey-section">
                <h4>How I work</h4>
                <p>
                  From running experiments and cleaning datasets to explaining
                  results to peers, collaboration and clarity have been
                  consistent themes in my work. A data‑first mindset and a bias
                  for structure help me move teams from ad‑hoc processes to
                  repeatable, documented workflows.
                </p>
              </div>

              <div className="journey-section">
                <h4>Experience across domains</h4>
                <p>
                  At SUEZ, a global environmental services company, I supported
                  data‑driven, process‑oriented projects that connected
                  technical operations with business needs in a
                  quality‑focused setting. Later, as an ERP Executive at
                  Singhania University, I implemented and optimized modules for
                  exams, student data and reporting, acting as a bridge between
                  academic, IT and operations teams to improve data accuracy and
                  system efficiency.
                </p>
              </div>

              <div className="journey-section">
                <h4>What I’m studying</h4>
                <p>
                  I am currently pursuing an MSc in Project Management at UCD
                  Michael Smurfit Graduate Business School, strengthening my
                  skills in planning, governance, risk and cross‑cultural
                  teamwork while working on real‑world, project‑based
                  assignments.
                </p>
              </div>

              <div className="journey-section">
                <h4>What I’m aiming for</h4>
                <p>
                  I am driven by continuous learning and reflective practice,
                  always refining how I work and lead. Going forward, I aim to
                  operate at the intersection of technology, operations and
                  strategy, taking on roles where I can bring structure to
                  complexity and tackle challenges with a clear,
                  solution‑oriented mindset.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
