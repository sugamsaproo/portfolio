import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll, Float, Billboard, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function DoubleHelixGeometry({ length = 2.8, radius = 0.72, turns = 2.5 }) {
  const points1 = [];
  const points2 = [];
  
  for (let i = 0; i <= 1; i += 1 / (length * 32)) {
    const angle = i * Math.PI * 2 * turns;
    const y = (i - 0.5) * length;
    
    const x1 = Math.sin(angle) * radius;
    const z1 = Math.cos(angle) * radius;
    points1.push(new THREE.Vector3(x1, y, z1));
    
    const x2 = Math.sin(angle + Math.PI) * radius;
    const z2 = Math.cos(angle + Math.PI) * radius;
    points2.push(new THREE.Vector3(x2, y, z2));
  }
  
  const curve1 = new THREE.CatmullRomCurve3(points1);
  const curve2 = new THREE.CatmullRomCurve3(points2);

  return (
    <group>
      <mesh>
        <tubeGeometry args={[curve1, 350, 0.065, 13]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.33} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curve2, 350, 0.065, 13]} />
        <meshStandardMaterial color="#ff6b9d" emissive="#ff6b9d" emissiveIntensity={0.33} />
      </mesh>
    </group>
  );
}

function TimelineCards() {
  const cards = [
    { t: 0.12, title: "2018-21", role: "B.Tech", org: "DCR" },
    { t: 0.25, title: "2021-22", role: "Lab Asst", org: "Medinnbelle" },
    { t: 0.38, title: "2022-24", role: "Analyst", org: "Suez" },
    { t: 0.55, title: "2024-2025", role: "ERP Exec", org: "Singhania" },
    { t: 0.72, title: "2025-Now", role: "MSc PM", org: "UCD" },
  ];

  return (
    <>
      {cards.map((card, i) => {
        const angle = card.t * Math.PI * 2 * 2.5;
        const y = (card.t - 0.5) * 2.8;
        const x = Math.sin(angle) * 1.4;
        const z = Math.cos(angle) * 1.4;

        return (
          <Billboard key={i} position={[x, y, z]}>
            <Float floatIntensity={0.22} speed={0.9}>
              <Html distanceFactor={11} scale={0.62}>
                <motion.div
                  className="timeline-card-compact"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="card-compact-title">{card.title}</div>
                  <div className="card-compact-role">{card.role}</div>
                  <div className="card-compact-org">{card.org}</div>
                </motion.div>
              </Html>
            </Float>
          </Billboard>
        );
      })}
    </>
  );
}

function CameraController() {
  const scroll = useScroll();
  const { camera } = useThree();
  useFrame(() => {
    const t = scroll.offset;
    const angle = t * Math.PI * 2 * 2.5;
    const y = (t - 0.5) * 2.8;
    const r = 3.8;
    camera.position.set(Math.sin(angle) * r, y, Math.cos(angle) * r);
    camera.lookAt(0, y, 0);
  });
  return null;
}

function HelixScene() {
  return (
    <>
      <DoubleHelixGeometry />
      <TimelineCards />
      <CameraController />
    </>
  );
}

export default function TimelineHelix() {
  return (
    <section className="timeline-section">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 50 }}>
        <color attach="background" args={["#0a0e1a"]} />
        <ambientLight intensity={0.58} />
        <pointLight position={[3, 2.5, 3]} intensity={0.75} color="#00d9ff" />
        <pointLight position={[-3, -2.5, 3]} intensity={0.55} color="#ff6b9d" />
        <ScrollControls pages={0.95} damping={0.24}>
          <Scroll>
            <Suspense fallback={null}>
              <HelixScene />
            </Suspense>
          </Scroll>
          <CameraController />
        </ScrollControls>
      </Canvas>
    </section>
  );
}
