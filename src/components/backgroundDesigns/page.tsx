// src/components/backgroundDesigns.tsx
import React from 'react';

export const FloatingDots = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-gray-200 rounded-full opacity-10"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 20 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      />
    ))}
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-100px) translateX(20px); }
        100% { transform: translateY(-200px) translateX(0); }
      }
    `}</style>
  </div>
);

export const DiagonalStripes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <div className="relative w-full h-full">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 bg-gradient-to-r from-violet-500 to-red-500"
          style={{
            width: '150%',
            top: `${i * 10}%`,
            left: '-25%',
            transform: 'rotate(-5deg)',
            height: '2px'
          }}
        />
      ))}
    </div>
  </div>
);

export const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="relative w-full h-full">
      {/* Horizontal lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full bg-gray-200 opacity-10"
          style={{
            height: '1px',
            top: `${i * 5}%`,
            animation: `pulse ${Math.random() * 10 + 5}s infinite alternate`
          }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute h-full bg-gray-200 opacity-10"
          style={{
            width: '1px',
            left: `${i * 5}%`,
            animation: `pulse ${Math.random() * 10 + 5}s infinite alternate`
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes pulse {
        0% { opacity: 0.05; }
        100% { opacity: 0.2; }
      }
    `}</style>
  </div>
);

export const CornerAccents = () => (
  <>
    <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-violet-400 opacity-30" />
    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-red-400 opacity-30" />
  </>
);