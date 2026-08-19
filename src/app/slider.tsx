"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  alt?: string;
}

const slides: Slide[] = [
  { id: 1, image: '/new-assets/111.jpg', alt: 'Automatic boom barrier at a commercial entrance' },
  { id: 2, image: '/new-assets/111.jpg', alt: 'Automatic bollards for perimeter protection' },
  { id: 3, image: '/new-assets/111.jpg', alt: 'Pedestrian access control turnstile' },
];

const SLIDE_DURATION = 3;

const MagicSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToNextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goToPreviousSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (SLIDE_DURATION * 10);
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          goToNextSlide();
          return 0;
        }
        return newProgress;
      });
    }, 100);
  }, [goToNextSlide]);

  useEffect(() => {
    if (isPlaying) startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentSlide, startTimer]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
      setTouchStart(null);
      setIsPlaying(true);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <section
        className="relative w-full h-full min-h-[200px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          aspectRatio: '1920/600',
        }}
      >
        {/* Slides */}
        <div className="absolute inset-0 h-full w-full">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt || `Slide ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-3 top-1/2 z-40 -translate-y-1/2 group p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 transition"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-3 top-1/2 z-40 -translate-y-1/2 group p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 transition"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Thumbnails (visible on lg and above) */}
        <div className="absolute bottom-14 left-1/2 z-50 hidden -translate-x-1/2 gap-3 lg:flex">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`relative h-[60px] w-[90px] overflow-hidden rounded-xl border-2 transition-all duration-500 shadow-lg group ${
                idx === currentSlide
                  ? 'border-blue-400 scale-110 shadow-blue-500/40 ring-2 ring-blue-400/30'
                  : 'border-white/60 opacity-70 hover:opacity-100 hover:scale-105 hover:border-white hover:shadow-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10 group-hover:from-black/20"></div>
              <Image
                src={slide.image}
                alt={slide.alt || `Thumbnail ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {idx === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-20 animate-pulse"></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full z-30">
                {idx === currentSlide && (
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Dots (visible on mobile and tablets) */}
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-3 lg:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm border ${
                idx === currentSlide
                  ? 'w-10 h-4 bg-gradient-to-r from-blue-400 to-purple-500 shadow-blue-500/50 border-blue-400/50'
                  : 'w-4 h-4 bg-white/60 hover:bg-white/80 hover:scale-125 border-white/30 hover:border-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <div
                  className="h-full bg-gradient-to-r from-white/40 to-white/20 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </button>
          ))}
        </div>          
      </section>
    </div>
  );
};

export default MagicSlider;
