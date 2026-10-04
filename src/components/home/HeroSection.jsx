import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, Layers, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

// Dynamic Floating Particle System (AnalyticaHouse Style)
function ParticleField({ count = 65 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 1.2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 260;
      const duration = 2.5 + Math.random() * 2.5;
      const delay = Math.random() * 2;
      return { id: i, size, left, top, x, y, duration, delay };
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
    "Kurumsal Web & Dijital Varlık",
    "Hedefli Arama & Reklam Görünürlüğü",
    "Müşteri Talebi & Teklif Süreçleri",
    "İş Süreçleri & Otomasyon",
    "24 Saatte Ücretsiz Ön İnceleme",
    "Ölçülebilir & Şeffaf Yol Haritası",
    "İstanbul & Global Operasyon"
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#070b10] text-white">
      {/* AnalyticaHouse Signature Polygon Beam Glow */}
      <div className="ah-polygon-beam" />
      
      {/* Dynamic Floating Particles */}
      <ParticleField count={70} />

      {/* Radial soft lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-petrol-600/20 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Positioning (PDF Bölüm 1) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Upper Definition / Kicker with Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-petrol-300 font-mono text-xs font-semibold tracking-wide backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-petrol-400 animate-pulse" />
              <span>Dijital Gelişim ve Dönüşüm Ajansı</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-[64px] font-display font-bold tracking-tight text-white leading-[1.08]"
            >
              İşinizin bir sonraki adımında.
            </motion.h1>

            {/* Spot Text */}
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light"
            >
              ERA Dijital, işletmenizin dijital gelişim önceliklerini belirliyor; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyor.
            </motion.p>

            {/* AnalyticaHouse Style Dual Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Primary Button with Text-Slide Animation */}
                <button
                  onClick={() => openWizard()}
                  className="ah-button text-sm py-3.5 px-6"
                >
                  <span>
                    <span className="text-primary">
                      Ücretsiz ön değerlendirme iste <ArrowUpRight className="w-4 h-4 ml-1" />
                    </span>
                    <span className="text-secondary">
                      30 Sn'de Analizi Başlat <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </span>
                </button>

                {/* Secondary Button with White Border & Text-Slide Animation */}
                <a
                  href="#gelisim-alanlari"
                  className="ah-button button-white text-sm py-3.5 px-6"
                >
                  <span>
                    <span className="text-primary">
                      Gelişim alanlarını incele <span className="ml-1 text-xs opacity-75">↓</span>
                    </span>
                    <span className="text-secondary">
                      Çözüm Yapısını Keşfet <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </span>
                </a>
              </div>

              {/* Sub-button Note */}
              <p className="text-xs text-slate-400 pl-1 font-sans">
                Kısa bir ihtiyaç görüşmesi ve mevcut dijital varlıkların ön incelemesiyle başlıyor.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interconnected 4-Module Live System (PDF Sayfa 6 Önerisi) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0D1522]/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-petrol-400/40 transition-all duration-300">
              
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-petrol-500/10 rounded-full blur-[70px] pointer-events-none" />

              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-petrol-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Entegre Gelişim Mimarisi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-petrol-300 font-bold bg-petrol-500/20 border border-petrol-400/30 px-2.5 py-0.5 rounded-full">
                  Canlı Akış
                </span>
              </div>

              {/* 4 Connected Modules with Animated Pulsing Signal Beams */}
              <div className="space-y-3 relative">
                
                {/* Module 1 */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between group/card hover:bg-white/[0.06] hover:border-petrol-400/40 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/20 text-petrol-300 flex items-center justify-center font-mono font-bold text-xs border border-petrol-400/20">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Dijital Varlık & Kurumsal Anlatım</div>
                      <div className="text-[11px] text-slate-400">Web siteleri & güven veren görsel kimlik</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-400 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 2 */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between group/card hover:bg-white/[0.06] hover:border-petrol-400/40 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/20 text-petrol-300 flex items-center justify-center font-mono font-bold text-xs border border-petrol-400/20">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Görünürlük & Müşteri Kazanımı</div>
                      <div className="text-[11px] text-slate-400">İçerik, arama (SEO-GEO) & reklam</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-400 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 3 */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between group/card hover:bg-white/[0.06] hover:border-petrol-400/40 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/20 text-petrol-300 flex items-center justify-center font-mono font-bold text-xs border border-petrol-400/20">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Satış & Müşteri İlişkileri</div>
                      <div className="text-[11px] text-slate-400">Başvuru, teklif & düzenli talep yönetimi</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-400 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 4 */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between group/card hover:bg-white/[0.06] hover:border-petrol-400/40 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/20 text-petrol-300 flex items-center justify-center font-mono font-bold text-xs border border-petrol-400/20">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Yazılım & İş Süreçleri</div>
                      <div className="text-[11px] text-slate-400">Özel uygulamalar & operasyonel otomasyon</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-400 group-hover/card:scale-125 transition-transform" />
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Birbirine bağlı çalışan dijital omurga</span>
                <span className="text-petrol-300 font-semibold font-mono flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-petrol-400" />
                  Birlikte Çalışan Yapı
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* AnalyticaHouse Infinite Continuous Marquee Ticker */}
      <div className="relative z-10 mt-12 pt-6 border-t border-white/10 w-full overflow-hidden">
        <div className="carousel-container max-w-6xl mx-auto">
          <div className="carousel-track flex items-center gap-8 py-2">
            {[...capabilities, ...capabilities].map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-petrol-400 shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
