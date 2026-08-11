"use client";
import React from 'react';

interface GeometricNetworkBackgroundProps {
  className?: string;
}

const GeometricNetworkBackground: React.FC<GeometricNetworkBackgroundProps> = ({ className = '' }) => (
  <div
    className={`w-full h-full ${className}`}
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(120deg, #e9ecf3 0%, #f5f7fa 100%)',
      overflow: 'hidden',
    }}
  >
    {/* Soft radial gradient behind the cube */}
    <svg width="500" height="500" style={{ position: 'absolute', left: 0, bottom: 0 }}>
      <defs>
        <radialGradient id="radial-bg" cx="30%" cy="80%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#e9ecf3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="420" rx="180" ry="90" fill="url(#radial-bg)" />
    </svg>
    {/* Cube with shadow */}
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', left: 40, bottom: 30 }}>
      <ellipse cx="60" cy="112" rx="38" ry="10" fill="#bfc7d1" opacity="0.25" />
      <g>
        <polygon points="60,10 110,35 60,60 10,35" fill="#e0e5ec" />
        <polygon points="60,60 110,35 110,85 60,110" fill="#cfd6e6" />
        <polygon points="60,60 10,35 10,85 60,110" fill="#f5f7fa" />
        <polygon points="60,10 110,35 60,60 10,35" fill="#e0e5ec" />
        <polygon points="60,10 60,60 10,35" fill="#dbe2ef" />
        <polygon points="60,10 60,60 110,35" fill="#e9ecf3" />
        {/* Cube highlight */}
        <polygon points="60,10 70,30 60,60 50,30" fill="#fff" opacity="0.18" />
      </g>
    </svg>
    {/* Network lines and dots - denser and more organic */}
    <svg width="900" height="400" viewBox="0 0 900 400" style={{ position: 'absolute', left: 80, bottom: 60 }}>
      <g stroke="#fff" strokeWidth="1.1" opacity="0.85">
        <line x1="0" y1="250" x2="80" y2="200" />
        <line x1="80" y1="200" x2="180" y2="220" />
        <line x1="80" y1="200" x2="120" y2="120" />
        <line x1="120" y1="120" x2="220" y2="100" />
        <line x1="120" y1="120" x2="180" y2="220" />
        <line x1="180" y1="220" x2="320" y2="180" />
        <line x1="220" y1="100" x2="320" y2="180" />
        <line x1="320" y1="180" x2="400" y2="120" />
        <line x1="320" y1="180" x2="500" y2="140" />
        <line x1="400" y1="120" x2="500" y2="140" />
        <line x1="500" y1="140" x2="650" y2="60" />
        <line x1="400" y1="120" x2="650" y2="60" />
        {/* Extra lines for density */}
        <line x1="80" y1="200" x2="220" y2="100" />
        <line x1="180" y1="220" x2="400" y2="120" />
        <line x1="220" y1="100" x2="500" y2="140" />
        <line x1="120" y1="120" x2="320" y2="180" />
        <line x1="500" y1="140" x2="800" y2="40" />
        <line x1="650" y1="60" x2="800" y2="40" />
        <line x1="320" y1="180" x2="800" y2="40" />
      </g>
      <g>
        {/* Main dots, varied size/opacity */}
        <circle cx="0" cy="250" r="5" fill="#fff" opacity="0.95" />
        <circle cx="80" cy="200" r="4.5" fill="#fff" opacity="0.92" />
        <circle cx="120" cy="120" r="4.2" fill="#fff" opacity="0.9" />
        <circle cx="180" cy="220" r="3.8" fill="#fff" opacity="0.88" />
        <circle cx="220" cy="100" r="3.7" fill="#fff" opacity="0.85" />
        <circle cx="320" cy="180" r="3.3" fill="#fff" opacity="0.82" />
        <circle cx="400" cy="120" r="3" fill="#fff" opacity="0.8" />
        <circle cx="500" cy="140" r="2.7" fill="#fff" opacity="0.78" />
        <circle cx="650" cy="60" r="2.5" fill="#fff" opacity="0.75" />
        <circle cx="800" cy="40" r="2.2" fill="#fff" opacity="0.7" />
        {/* Glowing dots */}
        <circle cx="80" cy="200" r="12" fill="#fff" opacity="0.09" />
        <circle cx="320" cy="180" r="14" fill="#fff" opacity="0.07" />
        <circle cx="500" cy="140" r="10" fill="#fff" opacity="0.06" />
        <circle cx="650" cy="60" r="8" fill="#fff" opacity="0.05" />
      </g>
      {/* Faint, blurred background dots for dreamy effect */}
      <g>
        <circle cx="200" cy="80" r="18" fill="#fff" opacity="0.04" />
        <circle cx="400" cy="60" r="22" fill="#fff" opacity="0.03" />
        <circle cx="600" cy="100" r="16" fill="#fff" opacity="0.025" />
        <circle cx="700" cy="30" r="14" fill="#fff" opacity="0.02" />
      </g>
    </svg>
  </div>
);

export default GeometricNetworkBackground; 