import React from 'react';
import { PRICE_LIST } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function PriceList() {
  return (
    <section id="pricing" className="py-24 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Стоимость мягких окон в Казани от производителя
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий для Вас вариант
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICE_LIST.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col p-8 rounded-3xl bg-background border border-gray-100 shadow-lg relative overflow-hidden"
            >
              {item.id === 3 && (
                <div className="absolute top-0 right-0 bg-button text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Хит продаж
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-6 min-h-[48px]">{item.description}</p>
              <div className="text-3xl font-bold text-accent mb-8">
                {item.price}
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-6 h-6 text-button flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                  item.id === 3 
                    ? 'bg-button hover:bg-button-hover text-white shadow-md hover:shadow-xl transform hover:-translate-y-1' 
                    : 'bg-white border-2 border-button text-button hover:bg-button hover:text-white'
                }`}
              >
                Рассчитать стоимость
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
