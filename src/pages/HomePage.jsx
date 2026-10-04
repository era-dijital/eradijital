import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

// PDF 3. Web Sitesi Yeni İçerik Yapısı Bölümleri (Bölüm 1 - 7)
import HeroSection from '../components/home/HeroSection';
import NeedsSection from '../components/home/NeedsSection';
import SolutionsSection from '../components/home/SolutionsSection';
import DeliverablesSection from '../components/home/DeliverablesSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f4] dark:bg-[#070b10] text-[#172b3a] dark:text-slate-100 selection:bg-petrol-700 selection:text-white transition-colors duration-250">
      <SEO 
        title="ERA Dijital | Dijital Gelişim ve Dönüşüm Ajansı"
        description="ERA Dijital, işletmelerin dijital gelişimini planlıyor; web, içerik, pazarlama ve yazılım çözümlerini ihtiyaçlara göre hayata geçiriyor."
      />

      {/* Floating Pill Nav Bar - AnalyticaHouse Style */}
      <Header />

      <main className="flex-1">
        {/* Bölüm 1 — İlk ekran */}
        <HeroSection />

        {/* Bölüm 2 — Ziyaretçinin kendi ihtiyacını tanıması */}
        <NeedsSection />

        {/* Bölüm 3 — Çözüm yaklaşımı */}
        <SolutionsSection />

        {/* Bölüm 4 — Yetkinliğin görünür olması */}
        <DeliverablesSection />

        {/* Bölüm 5 — Çalışma deneyimi */}
        <ProcessSection />

        {/* Bölüm 6 — Karar öncesi sorular */}
        <FaqSection />

        {/* Bölüm 7 — Sonuç ve iletişim */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
