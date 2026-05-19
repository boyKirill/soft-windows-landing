import React from 'react';


export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1599580665044-f87c537ee501?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-accent/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-button/20 text-button border border-button/50 font-semibold mb-6 animate-pulse text-sm sm:text-base">
          Прямо от производителя
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Мягкие окна для вашей <br className="hidden md:block"/> беседки и террасы
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
          Продлите сезон отдыха. Защита от ветра, дождя и снега без потери панорамного вида с гарантией 5 лет.
        </p>
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
