import React from 'react';

function BackgroundAnimation() {
  return (
    <div className="background-canvas">
      <div className="animated-bg">
        {/* Animated gradient blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        
        {/* Animated particles */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.05}s`,
              '--duration': `${3 + Math.random() * 4}s`,
              '--size': `${4 + Math.random() * 8}px`
            }}></div>
          ))}
        </div>
        
        {/* Grid lines */}
        <div className="grid"></div>
      </div>
    </div>
  );
}

export default BackgroundAnimation;
