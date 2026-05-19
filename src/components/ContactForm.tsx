"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  area: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (!val) {
      setValue('phone', '');
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
    
    setValue('phone', formatted);
    e.target.value = formatted;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
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
              <h2 className="text-3xl font-bold mb-4">Оставьте заявку на расчет</h2>
              <p className="text-gray-300 mb-8">
                Мы свяжемся с вами в течение 15 минут, уточним детали и рассчитаем точную стоимость ваших мягких окон.
              </p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">+7 (999) 123-45-67</p>
              <p className="text-gray-300">info@softwindows.ru</p>
            </div>
          </div>
          
          <div className="md:w-7/12 p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  {...register("name", { 
                    required: "Введите ваше имя",
                    validate: (value) => {
                      const badWords = /(хуй|пизд|еба|бля|сук|мудак|говн|шлюх|пидор|хер|хрен)/i;
                      if (badWords.test(value)) {
                        return "Пожалуйста, введите корректное имя";
                      }
                      return true;
                    }
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="Иван Иванов"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  {...register("phone", { 
                    required: "Введите номер телефона",
                    minLength: {
                      value: 18,
                      message: "Введите номер полностью"
                    },
                    onChange: handlePhoneChange
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Примерная площадь (м²)</label>
                <input 
                  type="number" 
                  {...register("area")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button/50 transition-all"
                  placeholder="Например: 15"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-button hover:bg-button-hover text-white rounded-xl font-bold text-lg transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Рассчитать стоимость'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center">
                  Спасибо! Ваша заявка успешно отправлена.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center">
                  Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
