import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

// PDF Yol Haritası Bölümleri (Bölüm 1 - 7 + 4b Biz Kimiz)
import HeroSection from '../components/home/HeroSection';
import NeedsSection from '../components/home/NeedsSection';
import SolutionsSection from '../components/home/SolutionsSection';
import DeliverablesSection from '../components/home/DeliverablesSection';
import AboutSection from '../components/home/AboutSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#090D14] text-[#0F172A] dark:text-slate-100 selection:bg-[#FFD23F] selection:text-[#0F172A] transition-colors duration-300">
      <SEO 
        title="ERA Dijital | Dijital Gelişim ve Dönüşüm Ajansı"
        description="ERA Dijital, işletmelerin dijital gelişimini planlıyor; web, içerik, pazarlama ve yazılım çözümlerini ihtiyaçlara göre hayata geçiriyor."
      />

      {/* Floating Pill Nav Bar */}
      <Header />

      <main className="flex-1">
        {/* Bölüm 1 — İlk ekran */}
        <HeroSection />

        {/* Bölüm 2 — Ziyaretçinin kendi ihtiyacını tanıması */}
        <NeedsSection />

        {/* Bölüm 3 — Çözüm yaklaşımı */}
        <SolutionsSection />

        {/* Bölüm 4 — Yetkinliğin görünür olması (Örnek İşler) */}
        <DeliverablesSection />

        {/* Bölüm 4b — Biz Kimiz (Yeni) */}
        <AboutSection />

        {/* Bölüm 5 — Çalışma deneyimi (Süreç) */}
        <ProcessSection />

        {/* Bölüm 6 — Karar öncesi sorular (SSS) */}
        <FaqSection />

        {/* Bölüm 7 — Sonuç ve iletişim */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
