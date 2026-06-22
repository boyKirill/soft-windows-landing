"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the cookie banner has been dismissed
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-4 md:left-auto md:max-w-md bg-stone-900/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-2xl z-50 border border-stone-800 flex items-center justify-between gap-4 text-xs">
      <p className="flex-1">
        Мы используем файлы cookie для анализа трафика и персонализации рекламы. Продолжая работу с сайтом, вы соглашаетесь с нашей <Link href="/privacy" className="underline hover:text-gray-300">политикой конфиденциальности</Link>.
      </p>
      <button 
        onClick={handleAccept}
        className="bg-button hover:bg-button-hover text-white px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
      >
        ОК
      </button>
    </div>
  );
}
