import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, useTexture, Float, Billboard, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Helix geometry
function Helix({ length = 8, radius = 2, turns = 3 }) {
  const points = [];
  for (let i = 0; i <= 1; i += 1 / (length * 30)) {
    const angle = i * Math.PI * 2 * turns;
    const y = (i - 0.5) * length;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    points.push(new THREE.Vector3(x, y, z));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  return (
    <mesh>
      <tubeGeometry args={[curve, 600, 0.07, 24]} />
      <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.17} />
    </mesh>
  );
}

// Camera animation for scroll
function CameraControlsHelix({ turns = 3, length = 8 }) {
  const scroll = useScroll();
  const { camera } = useThree();
  useFrame(() => {
    const t = scroll.offset;
    const angle = t * Math.PI * 2 * turns;
    const y = (t - 0.5) * length;
    const r = 5.3;
    const x = Math.sin(angle) * r;
    const z = Math.cos(angle) * r;
    camera.position.set(x, y, z);
    camera.lookAt(0, y, 0);
  });
  return null;
}

// Content cards + photo
function TimelineCards({ photoTexture, length = 8, turns = 3, radius = 2 }) {
  const sections = [
    {
      t: 0.09,
      title: "2018 - 2021",
      sub: "B.Tech Biotechnology",
      period: "DCR University",
      desc: "Graduated with honors in Biotechnology.",
    },
    {
      t: 0.22,
      title: "2021 - 2022",
      sub: "Lab Assistant",
      period: "Medinnbelle Herbalcare Pvt. Ltd.",
      desc: "Supported microbiology research and quality assurance.",
    },
    {
      t: 0.33,
      title: "2022 - 2024",
      sub: "Lab Analyst",
      period: "Suez India Pvt Ltd",
      desc: "Data cleaning, analysis, dashboard reporting & QA.",
    },
    {
      t: 0.46,
      title: "2024 - 2025",
      sub: "ERP Executive",
      period: "Singhania University",
      desc: "ERP System Implementation, Dashboard Creation & Visualization.",
    },
    {
      t: 0.62,
      title: "2025 - Present",
      sub: "MSc Business Analytics",
      period: "UCD Michael Smurfit Graduate Business School",
      desc: "Project management, strategy, and analytics immersion.",
    },
    {
      t: 0.28, // place this between career stages
      title: "In the Lab: Sugam in Action!",
      photo: true,
      img: photoTexture,
      desc: "",
    },
  ];
  return (
    <>
      {sections.map((section, i) => {
        const t = section.t;
        const angle = t * Math.PI * 2 * turns;
        const y = (t - 0.5) * length;
        const x = Math.sin(angle) * (radius + 1.3);
        const z = Math.cos(angle) * (radius + 1.3);

        return (
          <Billboard key={i} position={[x, y, z]}>
            <Float
              speed={section.photo ? 2 : 1}
              floatIntensity={section.photo ? 1 : 0.3}
              rotationIntensity={section.photo ? 0.25 : 0.11}
            >
              <group>
                {section.photo ? (
                  <mesh>
                    <planeGeometry args={[2.1, 3]} />
                    <meshStandardMaterial
                      color="#fff"
                      emissive="#ffd700"
                      emissiveIntensity={0.25}
                      map={section.img}
                    />
                    <Html distanceFactor={6}>
                      <div style={{
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        borderRadius: "11px",
                        padding: "0.4em 1.2em",
                        fontWeight: "bold",
                        marginTop: "1.7em",
                        boxShadow: "0 5px 18px #00f5ff66, 0 0 2px #9d4edd"
                      }}>
                        {section.title}
                      </div>
                    </Html>
                  </mesh>
                ) : (
                  <Html distanceFactor={12}>
                    <div
                      style={{
                        background: "rgba(18,22,38,0.95)",
                        border: "2px solid #ffd700",
                        borderRadius: "18px",
                        padding: "1.1em 1.7em",
                        width: 245,
                        color: "#fff",
                        fontSize: 16,
                        boxShadow: "0 4px 20px #00f5ff66",
                        textAlign: "left",
                        fontFamily: "'Inter',sans-serif"
                      }}
                    >
                      <b>{section.title}</b>
                      <div style={{ color: "#00f5ff", margin: "0.5em 0" }}>{section.sub}</div>
                      <div style={{ color: "#ffd700" }}>{section.period}</div>
                      <div style={{ color: "#aaa" }}>{section.desc}</div>
                    </div>
                  </Html>
                )}
                {/* Glow for photo: */}
                <mesh position={[0, section.photo ? -1.5 : -1.12, 0]}>
                  <sphereGeometry args={[0.23, 12, 12]} />
                  <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={.13} transparent opacity={.09} />
                </mesh>
              </group>
            </Float>
          </Billboard>
        );
      })}
    </>
  );
}

function HelixStoryScene() {
  // Only use this R3F hook here!
  const photoTexture = useTexture('/assets/sugam_lab.jpg');
  return (
    <>
      <Helix />
      <TimelineCards photoTexture={photoTexture} />
      <CameraControlsHelix />
    </>
  );
}

export default function DNAHelixScene() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: "#0C1221", position: "relative" }}>
      <Canvas linear camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#0C1221']} />
        <ambientLight intensity={0.66} />
        <spotLight position={[0, 10, 10]} angle={1.3} penumbra={1} intensity={1.20} castShadow />
        <ScrollControls pages={1.18} damping={0.35} horizontal={false}>
          <Scroll>
            <Suspense fallback={null}>
              <HelixStoryScene />
            </Suspense>
          </Scroll>
          <CameraControlsHelix />
        </ScrollControls>
      </Canvas>
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 0,
          width: '100%',
          textAlign: 'center',
          color: 'white',
          textShadow: '0 4px 24px #0ff',
          zIndex: 99,
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: '.02em'
        }}>
        Sugam Saproo: <span style={{ color: '#00f5ff' }}>Inside The DNA of a Project Manager</span>
      </div>
    </div>
  );
}
