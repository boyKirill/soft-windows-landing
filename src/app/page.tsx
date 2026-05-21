import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Gallery from '@/components/Gallery';
import PriceList from '@/components/PriceList';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <BeforeAfterSlider />
        <Gallery />
        <PriceList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
