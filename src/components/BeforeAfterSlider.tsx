"use client";

import React, { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    before: "/compare/1-before.jpg",
    after: "/compare/1-after.jpg",
  },
  {
    id: 2,
    before: "/compare/1-before.jpg",
    after: "/compare/1-after.jpg",
  }
];

export default function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => setIsDragging(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Посмотрите на преображение беседки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Передвигайте бегунок, чтобы увидеть разницу до и после установки
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-video select-none touch-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={(e: ReactMouseEvent) => handleMove(e.clientX)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={handleMouseUp}
            onTouchMove={(e: ReactTouchEvent) => handleMove(e.touches[0].clientX)}
          >
            {/* After Image (Background) */}
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url(${SLIDES[currentSlide].after})` }}
            >
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                ПОСЛЕ
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none border-r-2 border-white"
              style={{ 
                backgroundImage: `url(${SLIDES[currentSlide].before})`,
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            >
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                ДО
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-transform duration-75"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          {SLIDES.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all z-20 text-gray-800"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all z-20 text-gray-800"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
