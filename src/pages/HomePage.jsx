import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

// İkili Yapı (Dijital Gelişim & Dijital Dönüşüm) Bölümleri
import HeroSection from '../components/home/HeroSection';
import DigitalGrowthSection from '../components/home/DigitalGrowthSection';
import TransitionThresholdSection from '../components/home/TransitionThresholdSection';
import DigitalTransformationSection from '../components/home/DigitalTransformationSection';
import SectoralSolutionsSection from '../components/home/SectoralSolutionsSection';
import RealProjectsSection from '../components/home/RealProjectsSection';

// Kurumsal Güven Katmanı
import AboutSection from '../components/home/AboutSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';

// 7. Bölüm: Ücretsiz Durum Tespiti
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#090D14] text-[#0F172A] dark:text-slate-100 selection:bg-[#FFD23F] selection:text-[#0F172A] transition-colors duration-300">
      <SEO 
        title="ERA Dijital | Dijital Gelişim ve Dönüşüm Ajansı"
        description="ERA Dijital, üretim ve ticaret gücünüzü dijitale taşıyor; Dijital Gelişim (dış görünüm & satış) ve Dijital Dönüşüm (iç operasyon & sistem) çözümleriyle işletmenizi büyütüyor."
      />

      {/* Floating Pill Nav Bar */}
      <Header />

      <main className="flex-1">
        {/* 1. BÖLÜM: HERO (Giriş Ekranı) + Kayan Hizmet Şeridi (Marquee) */}
        <HeroSection />

        {/* 2. BÖLÜM: 1. HİZMET ALANI — DİJİTAL GELİŞİM (Dış Görünüm & Satış) */}
        <DigitalGrowthSection />

        {/* 3. BÖLÜM: GEÇİŞ EŞİĞİ (Bağımsız İkinci Alana Giriş) */}
        <TransitionThresholdSection />

        {/* 4. BÖLÜM: 2. HİZMET ALANI — DİJİTAL DÖNÜŞÜM (İç Operasyon & Sistem) */}
        <DigitalTransformationSection />

        {/* 5. BÖLÜM: SEKTÖREL ÇÖZÜMLER (Müşteriye Ayna Tutma) */}
        <SectoralSolutionsSection />

        {/* 6. BÖLÜM: SAHADA ÇALIŞAN GERÇEK PROJELER */}
        <RealProjectsSection />

        {/* KURUMSAL GÜVEN KATMANI */}
        {/* Biz Kimiz */}
        <AboutSection />

        {/* 4 Aşamalı Çalışma Süreci */}
        <ProcessSection />

        {/* Sıkça Sorulan Sorular (SSS) */}
        <FaqSection />

        {/* 7. BÖLÜM: ÜCRETSİZ DURUM TESPİTİ (Risksiz İlk Adım) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
