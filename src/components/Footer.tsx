import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-lg bg-button flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            МЯГКИЕ ОКНА | КАЗАНЬ
          </div>
        </div>
        
        {/* Center: Phone and Email */}
        <div className="flex flex-col items-center gap-3 text-center">
          <a href="tel:+79519993016" className="text-white font-bold text-xl hover:underline">
            +7 (951) 999-30-16
          </a>
          <a href="mailto:magkieoknakazan@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            magkieoknakazan@gmail.com
          </a>
        </div>
        
        {/* Right: MAX Messenger */}
        <div className="flex">
          <a 
            href="https://max.ru/u/f9LHodD0cOK7ex7S7ojrDDQaEf3-nakaCnqooQDWmc36_ZWssLYXARW6pt4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-colors font-medium shadow-lg"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <rect width="100" height="100" rx="24" fill="url(#gradMax)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M50 15C30.67 15 15 30.67 15 50C15 57.94 17.65 65.25 22.09 71.12C22.69 71.9 23 72.85 22.84 73.81L21.36 82.68C20.9 85.42 23.58 87.5 26.15 86.4L35.6 82.5C36.4 82.16 37.3 82.1 38.1 82.3C41.8 83.4 45.8 84 50 84C69.33 84 85 68.33 85 49C85 29.67 69.33 14 50 14V15ZM50 31C60.49 31 69 39.51 69 50C69 60.49 60.49 69 50 69C39.51 69 31 60.49 31 50C31 39.51 39.51 31 50 31Z" fill="white"/>
              <defs>
                <linearGradient id="gradMax" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2D7CF6"/>
                  <stop offset="100%" stopColor="#8F3CFF"/>
                </linearGradient>
              </defs>
            </svg>
            Написать в МАКС
          </a>
        </div>
      </div>
      
      {/* Bottom: Legal */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs text-center md:text-left">
        <div>
          <p>© 2026 «Мягкие окна Казань». Все права защищены.</p>
          <p>ИП Алексеев Д.С. | ИНН: 210401171206 | ОГРНИП: 326210000016779</p>
          <p>Информация на сайте носит ознакомительный характер и не является публичной офертой (ст. 437 ГК РФ).</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/privacy" className="hover:text-white transition-colors underline">
            Политика конфиденциальности
          </Link>
          <Link href="/personal-data" className="hover:text-white transition-colors underline">
            Согласие на обработку данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
