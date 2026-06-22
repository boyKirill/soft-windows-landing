import React from 'react';
import { Sun, Shield, Wallet, Droplets } from 'lucide-react';
import { FEATURES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-10 h-10 text-button" />,
  Shield: <Shield className="w-10 h-10 text-button" />,
  Wallet: <Wallet className="w-10 h-10 text-button" />,
  Droplets: <Droplets className="w-10 h-10 text-button" />
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Почему выбирают наши мягкие окна?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Практичное и современное решение для Вашего комфорта по доступной цене
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="p-8 rounded-2xl bg-background border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
