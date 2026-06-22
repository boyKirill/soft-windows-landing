"use client";

import React, { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 3,
    before: "/compare/before-5.avif",
    after: "/compare/after-5.avif",
  },
  {
    id: 1,
    before: "/compare/before-2.avif",
    after: "/compare/after-2.avif",
  },
  {
    id: 2,
    before: "/compare/before-4.avif",
    after: "/compare/after-4.avif",
  },
  {
    id: 4,
    before: "/compare/before-6.avif",
    after: "/compare/after-6.avif",
  },
  {
    id: 5,
    before: "/compare/before-7.avif",
    after: "/compare/after-7.avif",
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
    <section className="py-24 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Преображение наших объектов
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Передвигайте бегунок, чтобы увидеть разницу до и после установки
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-800 select-none touch-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={(e: ReactMouseEvent) => handleMove(e.clientX)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={handleMouseUp}
            onTouchMove={(e: ReactTouchEvent) => handleMove(e.touches[0].clientX)}
          >
            {/* Sliding Track */}
            <div 
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out pointer-events-none"
              style={{ width: `${SLIDES.length * 100}%`, transform: `translateX(-${(currentSlide * 100) / SLIDES.length}%)` }}
            >
              {SLIDES.map((slide, index) => (
                <div key={slide.id} className="relative h-full" style={{ width: `${100 / SLIDES.length}%` }}>
                  {/* After Image */}
                  <div className="absolute inset-0">
                    <Image src={slide.after} alt="После" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={index === 0} />
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">
                      ПОСЛЕ
                    </div>
                  </div>

                  {/* Before Image (Clipped) */}
                  <div 
                    className="absolute inset-0 border-r-2 border-white z-10"
                    style={{ 
                      clipPath: index === currentSlide ? `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` : `polygon(0 0, 50% 0, 50% 100%, 0 100%)`
                    }}
                  >
                    <Image src={slide.before} alt="До" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={index === 0} />
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">
                      ДО
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Handle (Fixed in Viewport) */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-transform duration-75 pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 pointer-events-auto">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            {SLIDES.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all z-20 text-gray-800 pointer-events-auto"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all z-20 text-gray-800 pointer-events-auto"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          
          {/* Pagination Dots */}
          {SLIDES.length > 1 && (
            <div className="flex justify-center items-center gap-3 mt-8">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentSlide(index); setSliderPosition(50); }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-button w-8' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
