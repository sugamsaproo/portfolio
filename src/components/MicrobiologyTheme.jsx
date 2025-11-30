import React, { useEffect, useRef } from "react";
// This adds animated bacteria/molecule SVGs floating in the background
const bacColors = ["#2ff7f7", "#fab700", "#ff6f91", "#36ff7a"];
const createSVG = (i) => (
  <svg key={i} width="60" height="60" style={{ position: "absolute", left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, opacity: 0.5 }}>
    <ellipse cx="30" cy="30" rx="25" ry="15" fill={bacColors[i%bacColors.length]} />
    <circle cx="40" cy="20" r="8" fill="#fff" />
    <circle cx="20" cy="40" r="6" fill="#fff" />
  </svg>
);

function MicrobiologyTheme() {
  return (
    <div className="micro-bg">
      {[...Array(12)].map((_, i) => createSVG(i))}
    </div>
  );
}

export default MicrobiologyTheme;
