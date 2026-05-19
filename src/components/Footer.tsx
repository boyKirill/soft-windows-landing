import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-button flex items-center justify-center text-white font-bold">
            М
          </div>
          <span className="font-bold text-xl">Мягкие окна</span>
        </div>
        
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Все права защищены.
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">ВКонтакте</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Telegram</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
