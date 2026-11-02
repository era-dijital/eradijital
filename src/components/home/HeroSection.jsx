import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

// Dynamic Ambient Particle Field
function ParticleField({ count = 25 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 2.5 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const x = (Math.random() - 0.5) * 180;
      const y = (Math.random() - 0.5) * 180;
      const duration = 4 + Math.random() * 4;
      const delay = Math.random() * 2;
      const isGold = i % 4 === 0;
      return { id: i, size, left, top, x, y, duration, delay, isGold };
    });
  }, [count]);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.isGold ? '#FFD23F' : 'rgba(15, 23, 42, 0.2)',
            '--x': `${p.x}px`,
            '--y': `${p.y}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const { openWizard } = useQuoteWizard();

  const capabilities = [
    "Dönüşüm Odaklı Web Altyapıları",
    "Dijital Satış ve Müşteri İletişim Sistemleri",
    "Otomasyon, Yazılım ve Sistem Entegrasyonları",
    "Kurumsal Web Mimarisi ve Modernizasyonu",
    "E-Ticaret ve Dijital Ticaret Altyapıları",
    "Kurumsal Sosyal Medya Yönetimi",
    "Marka İletişimi",
    "Kurumsal Tanıtım ve Reklam Filmleri",
    "Performans Odaklı Reklam Yönetimi",
    "Kitle Analizi ve Medya Planlama",
    "Arama Motoru Optimizasyonu (SEO)",
    "Yapay Zekâ Görünürlüğü (GEO)",
    "CRM Kurulumu ve Entegrasyonu",
    "Yönetim Panelleri ve Otomatik Raporlama Sistemleri",
    "Çok Kanallı İletişim Altyapısı",
    "WhatsApp Entegrasyonları",
    "İşletmeye Özel Yazılım Geliştirme ve Yönetim Ekranları",
    "Dijital Katalog",
    "Ürün ve Fiyatlandırma Yönetim Sistemleri",
    "SEO ve GEO Uyumlu Dijital İçerik",
    "Dijital Satış Sistemleri"
  ];

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-12 overflow-hidden bg-[#F8F9FA] dark:bg-[#090D14] text-[#0F172A] dark:text-white transition-colors duration-300">

      {/* Subtle Warm Amber Mesh Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-[#FFD23F]/12 via-[#FFD23F]/4 to-transparent blur-[130px] pointer-events-none z-0" />

      {/* Ambient Particle Field */}
      <ParticleField count={25} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Hero Header: Badge, Title & Lead */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-12 sm:mb-16">
          {/* Slogan Başlık (h1) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[64px] font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]"
          >
            Uzmanlığınızı <br className="hidden sm:inline" />
            <span className="hl-yellow">Ticari Talebe Dönüştürün</span>
          </motion.h1>

          {/* Spot Açıklama (hero-lead) */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hero-lead text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Üretim gücünüzü, ticaret hacminizi veya sektörel uzmanlığınızı dijitalde tam karşılığıyla büyütün. İhtiyacınıza göre iki ana uzmanlık alanından biriyle hemen başlayın.
          </motion.p>
        </div>

        {/* Giriş Ekranındaki İki Net Tercih Kartı (.hero-dual-cards) */}
        <div className="hero-dual-cards grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">

          {/* 1. KART: DİJİTAL GELİŞİM (Sol Kart - Açık/Vitrin Vurgulu) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="hero-choice-card--gelisim group relative p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] dark:text-white mb-3">
                Güven Verin, Yeni Müşteriler Kazanın.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                Kurumsal web sitesi, dijital katalog, Google/Yapay Zekâ görünürlüğü ve doğru alıcıyı hedefleyen reklamlarla pazar payınızı artırın.
              </p>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] max-h-36 w-full mb-6 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
                <img
                  src="/resimler/ikili-yapi/digital-growth-prestige.jpg"
                  alt="Dijital Gelişim - Kurumsal vitrin ve B2B müşteri kazanımı"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] dark:border-white/5">
              <a
                href="#dijital-gelisim"
                className="btn-yellow w-full py-3.5 px-6 justify-center text-sm font-bold shadow-md cursor-pointer group/btn"
              >
                <span>Dijital Gelişim'i İnceleyin</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
              </a>
            </div>
          </motion.div>

          {/* 2. KART: DİJİTAL DÖNÜŞÜM (Sağ Kart - Koyu Lacivert/Operasyon Vurgulu) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="hero-choice-card--donusum group relative p-8 sm:p-9 rounded-3xl bg-[#0B1528] text-white border border-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.3)] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Dağınıklığı Bitirin, İşinizi Kolaylaştırın.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Müşteri takip sistemi (CRM), birbiriyle konuşan programlar (API), şirketinize özel yazılımlar ve otomasyonla iş yükünüzü hafifletin.
              </p>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] max-h-36 w-full mb-6 border border-white/15 bg-white/5">
                <img
                  src="/resimler/ikili-yapi/digital-transformation-single-screen.jpg"
                  alt="Dijital Dönüşüm - Operasyon, CRM ve süreç otomasyonu"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="#dijital-donusum"
                className="w-full py-3.5 px-6 justify-center text-sm font-bold rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer group/btn"
              >
                <span>Dijital Dönüşüm'ü İnceleyin</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Ara Şerit: Kayan Hizmet Şeridi (Marquee - Neler Yapıyoruz :) Korunuyor */}
      <div className="relative z-10 border-t border-[#E2E8F0] dark:border-white/10 w-full overflow-hidden bg-white/60 dark:bg-black/20 backdrop-blur-xs py-2">
        <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
          <span className="shrink-0 font-display font-bold text-xs sm:text-sm text-[#0F172A] dark:text-white mr-4 border-r border-[#E2E8F0] dark:border-white/10 pr-4">
            Neler Yapıyoruz :
          </span>
          <div className="carousel-container flex-1">
            <div className="carousel-track flex items-center gap-8">
              {[...capabilities, ...capabilities].map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-300 shrink-0 hover:text-[#0F172A] dark:hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
