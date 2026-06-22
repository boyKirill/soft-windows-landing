"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, X } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (!val) {
      setPhone('');
      return;
    }
    
    if (val[0] === '7' || val[0] === '8') {
      val = val.substring(1);
    }
    
    let formatted = '+7';
    if (val.length > 0) formatted += ` (${val.substring(0, 3)}`;
    if (val.length >= 4) formatted += `) ${val.substring(3, 6)}`;
    if (val.length >= 7) formatted += `-${val.substring(6, 8)}`;
    if (val.length >= 9) formatted += `-${val.substring(8, 10)}`;
    
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot check
    if (honeypot.length > 0) {
      // Bot detected, fake success
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, area }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      // window.ym(XXXXXX, 'reachGoal', 'lead');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form', err);
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-accent p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Оставьте заявку или позвоните по номеру</h2>
              <p className="text-gray-300 mb-8">
                Мы свяжемся с вами в течение 15 минут, уточним детали и рассчитаем точную стоимость ваших мягких окон.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:+79519993016" className="flex items-center gap-2 font-bold text-xl hover:text-gray-200 transition-colors w-fit">
                <Phone size={24} />
                +7 (951) 999-30-16
              </a>
              <a href="mailto:magkieoknakazan@gmail.com" className="text-gray-300 hover:text-white transition-colors w-fit">
                magkieoknakazan@gmail.com
              </a>
            </div>
          </div>
          <div className="md:w-7/12 p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Honeypot field */}
              <input 
                type="text" 
                name="website_confirm" 
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute opacity-0 pointer-events-none -z-10"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  minLength={18}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Примерная площадь (м²)</label>
                <input 
                  type="number" 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="Например, 15"
                  min="0"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input 
                  type="checkbox" 
                  id="consent"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  required
                  className="mt-1 flex-shrink-0"
                />
                <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                  Нажимая кнопку, я даю <Link href="/personal-data" className="underline hover:text-gray-700">согласие</Link> на обработку персональных данных и соглашаюсь с <Link href="/privacy" className="underline hover:text-gray-700">политикой конфиденциальности</Link>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !isAgreed}
                className="w-full py-4 bg-button hover:bg-button-hover text-white rounded-xl font-bold text-lg transition-colors mt-2 disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Рассчитать стоимость'}
              </button>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300" 
          onClick={() => setIsSubmitted(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="mx-auto w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={56} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Спасибо!</h3>
            <p className="text-gray-600">Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 w-full py-3 bg-button hover:bg-button-hover text-white rounded-xl font-bold transition-colors"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
