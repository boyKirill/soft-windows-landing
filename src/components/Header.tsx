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
        <div className="flex items-center">
          {/* Desktop Logo */}
          <div className="hidden sm:flex px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg bg-button items-center justify-center text-white font-bold text-base xl:text-xl flex-shrink-0">
            МЯГКИЕ ОКНА | КАЗАНЬ
          </div>
          {/* Mobile Logo */}
          <div className="flex sm:hidden w-10 h-10 rounded-lg bg-button items-center justify-center text-white font-bold text-xl flex-shrink-0">
            М
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-foreground font-medium text-sm xl:text-base">
          <a href="#features" className="hover:text-button transition-colors">Преимущества</a>
          <a href="#gallery" className="hover:text-button transition-colors">Наши работы</a>
          <a href="#pricing" className="hover:text-button transition-colors">Цены</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <a href="tel:+79519993016" className="flex items-center gap-2 text-foreground font-bold hover:text-button transition-colors text-lg xl:text-xl">
              <Phone size={24} className="hidden sm:block" />
              <span className="whitespace-nowrap">+7 (951) 999-30-16</span>
            </a>
            <a href="mailto:magkieoknakazan@gmail.com" className="text-sm text-gray-500 hover:text-button transition-colors">magkieoknakazan@gmail.com</a>
          </div>
          <a href="tel:+79519993016" className="sm:hidden flex items-center gap-2 text-foreground font-bold hover:text-button transition-colors text-xl">
            <Phone size={24} />
          </a>
          <button 
            className="lg:hidden text-foreground p-2 -mr-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 top-20 z-40 bg-black/20" onClick={() => setIsMenuOpen(false)} />
          <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 animate-fade-in z-50">
            <a href="#features" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Преимущества</a>
            <a href="#gallery" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Наши работы</a>
            <a href="#pricing" onClick={toggleMenu} className="text-lg font-medium text-foreground hover:text-button py-2 border-b border-gray-100">Цены</a>
            <div className="flex flex-col gap-1 mt-2 pb-2">
              <a href="tel:+79519993016" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-button py-2">
                <Phone size={24} />
                +7 (951) 999-30-16
              </a>
              <a href="mailto:magkieoknakazan@gmail.com" onClick={toggleMenu} className="text-lg font-medium text-gray-500 hover:text-button">magkieoknakazan@gmail.com</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
