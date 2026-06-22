import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Заявка принята | Мягкие окна Казань',
  description: 'Ваша заявка успешно отправлена',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="relative flex-grow flex items-center justify-center py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kazan-hero-bg.jpg"
          alt="Фон"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Success Card */}
      <div className="relative z-20 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl text-center animate-slide-up-fade">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-green-500" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Заявка успешно принята!
        </h1>
        <p className="text-lg text-gray-600">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
      </main>
      <Footer />
    </div>
  );
}
