import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';

// 3D DNA Helix Component
function DNAHelix() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.005;
    }
  });

  const helixPoints = [];
  for (let i = 0; i < 100; i++) {
    const y = (i - 50) * 0.15;
    const x = Math.cos(i * 0.1) * 3;
    const z = Math.sin(i * 0.1) * 3;
    helixPoints.push([x, y, z]);
  }

  return (
    <group ref={groupRef}>
      {/* DNA Strands */}
      <Line points={helixPoints} color="#00f5ff" lineWidth={3} />
      <Line
        points={helixPoints.map((p, i) => [
          Math.cos((i + 50) * 0.1) * 3,
          p[1],
          Math.sin((i + 50) * 0.1) * 3,
        ])}
        color="#ff6b9d"
        lineWidth={3}
      />

      {/* Rungs */}
      {helixPoints.map((point, i) => {
        if (i % 10 === 0) {
          const otherPoint = [
            Math.cos((i + 50) * 0.1) * 3,
            point[1],
            Math.sin((i + 50) * 0.1) * 3,
          ];
          return (
            <Line
              key={i}
              points={[point, otherPoint]}
              color="#ffd700"
              lineWidth={2}
            />
          );
        }
        return null;
      })}

      {/* Glow spheres at key points */}
      {helixPoints.map((point, i) => {
        if (i % 20 === 0) {
          return (
            <Sphere key={`sphere-${i}`} position={point} args={[0.3, 8, 8]}>
              <meshStandardMaterial
                color={['#00f5ff', '#ff6b9d', '#ffd700'][i % 3]}
                emissive={['#00f5ff', '#ff6b9d', '#ffd700'][i % 3]}
                emissiveIntensity={0.8}
              />
            </Sphere>
          );
        }
        return null;
      })}
    </group>
  );
}

function Canvas3D() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#ff6b9d" />
      <DNAHelix />
    </Canvas>
  );
}

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="hero-section">
      {/* 3D Canvas Background */}
      <div className="hero-canvas-wrapper">
        <Canvas3D />
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge-group">
          <span className="role-badge-premium">
            🎓 MSc Project Management
          </span>
          <span className="school-badge">UCD Michael Smurfit Business School</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Sugam Saproo</span>
        </motion.h1>

        <motion.p className="hero-tagline" variants={itemVariants}>
          Where <span className="highlight">Microbiology</span> Meets{' '}
          <span className="highlight">Project Excellence</span>
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Transforming the future of biotech through strategic project management.
          Lab scientist 🧬 → Enterprise Leader 🚀 → Currently mastering the art of
          innovation at UCD Smurfit. Driven by data, powered by strategy.
        </motion.p>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years in Tech & Science</span>
          </div>
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat">
            <span className="stat-value">∞</span>
            <span className="stat-label">Passion Points</span>
          </div>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary btn-glow">
            Start a Conversation
          </a>
          <a href="#projects" className="btn btn-secondary">
            Explore My Journey
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          variants={itemVariants}
        >
          <div className="mouse">
            <span></span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
