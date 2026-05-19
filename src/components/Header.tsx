"use client";

import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-button flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            М
          </div>
          <span className="font-bold text-lg sm:text-2xl text-foreground whitespace-nowrap">Мягкие окна</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-foreground font-medium">
          <a href="#features" className="hover:text-button transition-colors">Преимущества</a>
          <a href="#gallery" className="hover:text-button transition-colors">Наши работы</a>
          <a href="#pricing" className="hover:text-button transition-colors">Цены</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+79991234567" className="hidden sm:flex items-center gap-2 text-foreground font-bold hover:text-button transition-colors">
            <Phone size={20} />
            <span className="whitespace-nowrap">+7 (999) 123-45-67</span>
          </a>
          <button 
            className="md:hidden text-foreground p-2 -mr-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 animate-fade-in">
          <a href="#features" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Преимущества</a>
          <a href="#gallery" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Наши работы</a>
          <a href="#pricing" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Цены</a>
          <a href="tel:+79991234567" className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-button py-2 mt-2">
            <Phone size={20} />
            +7 (999) 123-45-67
          </a>
        </div>
      )}
    </header>
  );
}
