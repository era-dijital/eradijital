import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Layers, Activity, ShieldCheck, Check } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

// Dynamic Floating Particle System in Warm Yellow / Amber
function ParticleField({ count = 45 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 1.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const x = (Math.random() - 0.5) * 220;
      const y = (Math.random() - 0.5) * 220;
      const duration = 3 + Math.random() * 3;
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
    <section className="relative pt-32 sm:pt-36 pb-16 overflow-hidden bg-[#F7F7F5] dark:bg-[#0B0F17] text-[#111827] dark:text-white transition-colors duration-250">
      
      {/* Warm Ambient Yellow Glow (Dijital10 Style) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#FFD23F]/20 via-[#FFD23F]/5 to-transparent blur-[140px] pointer-events-none z-0" />
      
      {/* Floating Particles in Yellow */}
      <ParticleField count={45} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Positioning (PDF Bölüm 1) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Upper Definition / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD23F]/20 dark:bg-[#FFD23F]/15 border border-[#FFD23F]/40 text-[#92400E] dark:text-[#FFD23F] font-mono text-xs font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD23F] animate-pulse" />
              <span>Dijital Gelişim ve Dönüşüm Ajansı</span>
            </motion.div>

            {/* Main Headline with Yellow Highlighter */}
            <motion.h1 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-[62px] font-display font-bold tracking-tight text-[#111827] dark:text-white leading-[1.1]"
            >
              İşinizin <span className="hl-yellow">bir sonraki adımında.</span>
            </motion.h1>

            {/* Spot Text */}
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed font-light"
            >
              ERA Dijital, işletmenizin dijital gelişim önceliklerini belirliyor; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyor.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Yellow Primary Button - 100% Visible & Bold */}
                <button
                  onClick={() => openWizard()}
                  className="btn-yellow text-sm py-3.5 px-6 shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#111827]" />
                  <span>Ücretsiz ön değerlendirme iste</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button - Ghost Outline */}
                <a
                  href="#gelisim-alanlari"
                  className="btn-ghost text-sm py-3.5 px-6 cursor-pointer"
                >
                  <span>Gelişim alanlarını incele</span>
                  <span className="ml-1 text-xs opacity-75">↓</span>
                </a>
              </div>

              {/* Sub-button Note */}
              <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-1 font-sans">
                Kısa bir ihtiyaç görüşmesi ve mevcut dijital varlıkların ön incelemesiyle başlıyor.
              </p>
            </motion.div>

            {/* Dijital10 Style Trust Meta Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[#FFD23F] font-bold">★</span>
                <span className="font-semibold text-[#111827] dark:text-white">24+ Marka</span>
                <span>bize güveniyor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span>24 Saatte Ön İnceleme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
                <span>İstanbul & Global</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interconnected 4-Module System (PDF Sayfa 6 Önerisi) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-white dark:bg-[#111827] border border-[#E7E3DA] dark:border-white/10 p-6 sm:p-7 shadow-xl overflow-hidden group hover:border-[#FFD23F] transition-all duration-300">
              
              {/* Inner ambient yellow glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD23F]/15 rounded-full blur-[70px] pointer-events-none" />

              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD23F] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold">
                    Entegre Gelişim Mimarisi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#92400E] dark:text-[#FFD23F] font-bold bg-[#FFD23F]/20 border border-[#FFD23F]/30 px-2.5 py-0.5 rounded-full">
                  Birlikte Çalışan Yapı
                </span>
              </div>

              {/* 4 Connected Modules */}
              <div className="space-y-3 relative">
                
                {/* Module 1 */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-white/[0.03] border border-[#E7E3DA] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFD23F] text-[#111827] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white">Dijital Varlık & Kurumsal Anlatım</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Web siteleri & güven veren görsel kimlik</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FFD23F]" />
                </div>

                {/* Module 2 */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-white/[0.03] border border-[#E7E3DA] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFD23F] text-[#111827] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white">Görünürlük & Müşteri Kazanımı</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">İçerik, arama (SEO-GEO) & reklam</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FFD23F]" />
                </div>

                {/* Module 3 */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-white/[0.03] border border-[#E7E3DA] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFD23F] text-[#111827] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white">Satış & Müşteri İlişkileri</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Başvuru, teklif & düzenli talep yönetimi</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FFD23F]" />
                </div>

                {/* Module 4 */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-white/[0.03] border border-[#E7E3DA] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFD23F] text-[#111827] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white">Yazılım & İş Süreçleri</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Özel uygulamalar & operasyonel otomasyon</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FFD23F]" />
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-4 pt-3.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span>Birbirine bağlı çalışan dijital omurga</span>
                <span className="text-[#B45309] dark:text-[#FFD23F] font-semibold font-mono flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#EAB308]" />
                  Entegre Sistem
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Dijital10 Continuous Marquee Ticker */}
      <div className="relative z-10 mt-14 pt-6 border-t border-[#E7E3DA] dark:border-white/10 w-full overflow-hidden">
        <div className="carousel-container max-w-6xl mx-auto">
          <div className="carousel-track flex items-center gap-8 py-2">
            {[...capabilities, ...capabilities].map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 shrink-0 hover:text-[#111827] dark:hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
