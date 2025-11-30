import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const IMAGE_DATA = [
  { path: "/assets/sugam_lab.jpg", name: "Lab Work", desc: "Sugam conducting microbiology research in the lab" },
  { path: "/assets/placeholder1.jpg", name: "Data Analysis", desc: "Analyzing epidemiological data for insights" },
  { path: "/assets/placeholder2.jpg", name: "Strategic Planning", desc: "Planning and executing projects strategically" },
  { path: "/assets/placeholder3.jpg", name: "Teamwork", desc: "Collaborating with talented teams" },
  { path: "/assets/placeholder4.jpg", name: "Innovation", desc: "Driving innovation and excellence" },
];

const COLORS = ["#00d9ff", "#ff6b9d", "#ffd700", "#00ff88", "#9d4edd"];

function GalleryImageOrb({ position, index }) {
  const [texture, setTexture] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const imagePath = IMAGE_DATA[index].path;
    
    loader.load(
      imagePath,
      (tex) => setTexture(tex),
      undefined,
      () => setTexture(null)
    );
  }, [index]);

  return (
    <Float floatIntensity={0.35} speed={1.3}>
      <Sphere position={position} args={[0.58, 28, 28]}>
        {texture ? (
          <meshStandardMaterial 
            map={texture}
            toneMapped={false}
          />
        ) : (
          <meshStandardMaterial 
            color={COLORS[index]} 
            emissive={COLORS[index]}
            emissiveIntensity={0.45}
          />
        )}
      </Sphere>
    </Float>
  );
}

function Gallery3DContent() {
  const positions = [
    [0, 0, 0],
    [-1.6, 1.05, -1.4],
    [1.6, 1.05, -1.4],
    [-1.2, -1.3, -1.8],
    [1.2, -1.3, -1.8],
  ];

  return (
    <>
      {IMAGE_DATA.map((_, i) => (
        <GalleryImageOrb key={i} position={positions[i]} index={i} />
      ))}
    </>
  );
}

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="gallery-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Gallery & Moments
      </motion.h2>

      <div className="gallery-canvas">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 44 }}>
          <color attach="background" args={["#0a0e1a"]} />
          <ambientLight intensity={0.65} />
          <pointLight position={[5.2, 4.2, 5.2]} intensity={0.88} color="#00d9ff" />
          <pointLight position={[-5.2, -4.2, 5]} intensity={0.65} color="#ff6b9d" />
          <Suspense fallback={null}>
            <Gallery3DContent />
          </Suspense>
        </Canvas>
      </div>

      <div className="gallery-info">
        <div className="gallery-image-list">
          {IMAGE_DATA.map((data, i) => (
            <motion.div
              key={i}
              className="gallery-image-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="gallery-dot" style={{ backgroundColor: COLORS[i] }}></div>
              <motion.div 
                className="gallery-tooltip"
                animate={{ opacity: hoveredIndex === i ? 1 : 0, y: hoveredIndex === i ? -12 : -8 }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: hoveredIndex === i ? "auto" : "none" }}
              >
                <div className="gallery-tooltip-name">{data.name}</div>
                <div className="gallery-tooltip-desc">{data.desc}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
