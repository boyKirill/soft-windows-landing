import React from 'react';
import { GALLERY_ITEMS } from '@/lib/constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Наши работы в Казани и Татарстане
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры установленных мягких окон для беседок, веранд и террас.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] bg-gray-200"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-button text-button hover:bg-button hover:text-white rounded-xl font-bold text-lg transition-colors">
            Заказать такой же проект
          </a>
        </div>
      </div>
    </section>
  );
}
