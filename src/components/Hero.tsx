import React from 'react';


export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/kazan-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-button/20 text-button border border-button/50 font-semibold mb-6 animate-pulse text-sm sm:text-base">
          Прямо от производителя
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight sm:leading-tight">
          Премиальные мягкие окна для беседок и террас в Казани!
        </h1>
        <div className="text-base sm:text-lg md:text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-md space-y-2">
          <p>Надежная защита от непогоды: ветра, дождя и снега.</p>
          <p>Заводское качество с гарантией 5 лет.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-button hover:bg-button-hover text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl">
            Рассчитать стоимость
          </a>
          <a href="#gallery" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-xl font-bold text-lg transition-all">
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
