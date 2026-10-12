import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Activity, ShieldCheck, Check, Zap, Globe, Cpu, Users } from 'lucide-react';
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
    "Kurumsal Web & Dijital Varlık",
    "Hedefli Arama & Reklam Görünürlüğü",
    "Müşteri Talebi & Teklif Süreçleri",
    "İş Süreçleri & Otomasyon",
    "1 İş Gününde Yazılı Ön İnceleme",
    "Ölçülebilir & Şeffaf Yol Haritası",
    "İstanbul Operasyon & Uzaktan İş Birliği"
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#F8F9FA] dark:bg-[#090D14] text-[#0F172A] dark:text-white transition-colors duration-300">
      
      {/* Subtle Warm Amber Mesh Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#FFD23F]/12 via-[#FFD23F]/4 to-transparent blur-[130px] pointer-events-none z-0" />
      
      {/* Ambient Particle Field */}
      <ParticleField count={25} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Strategic Positioning (PDF Bölüm 1) */}
          <div className="lg:col-span-7 space-y-6">
            


            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[62px] font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.12]"
            >
              İşinizin <span className="hl-yellow">Bir Sonraki Adımında</span>
            </motion.h1>

            {/* Spot Text - biz-siz dili */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light"
            >
              İşletmenizin dijital gelişim önceliklerini birlikte belirliyoruz; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyoruz.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Yellow Primary Button */}
                <button
                  onClick={() => openWizard()}
                  className="btn-yellow text-sm py-3.5 px-6 shadow-md cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-[#0F172A] transition-transform group-hover:rotate-12" />
                  <span>Ücretsiz ön değerlendirme iste</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Secondary Button - Ghost Outline */}
                <a
                  href="#gelisim-alanlari"
                  className="btn-ghost text-sm py-3.5 px-6 cursor-pointer group"
                >
                  <span>Gelişim alanlarını incele</span>
                  <span className="ml-1 text-xs opacity-75 transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
              </div>

              {/* Sub-button Note - Net Akış Vaadi */}
              <p className="text-xs text-slate-500 dark:text-slate-400 pl-1 font-sans">
                Kısa bir ön talep formu ile başlıyoruz; 1 iş günü içinde varlıklarınızı inceleyip yazılı özet iletiyoruz.
              </p>
            </motion.div>

            {/* Real Trust Proof Badges (Dayanaklı ve Somut Güvenceler) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs text-slate-600 dark:text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-[#0F172A] dark:text-white">1 İş Gününde</span>
                <span>Ön İnceleme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Yazılı Özet & Görüşme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
                <span>Şeffaf Yol Haritası</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interconnected 4-Module Animated System (İmza Görsel Mimarisi) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-7 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-smooth-float">
              
              {/* Subtle Ambient Radial Lighting */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD23F]/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#E2E8F0] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                    Entegre Gelişim Mimarisi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#0F172A] dark:text-slate-200 font-semibold bg-slate-100 dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
                  Birlikte Çalışan Yapı
                </span>
              </div>

              {/* 4 Connected Modules with Clear Business Value Language */}
              <div className="space-y-3 relative">
                
                {/* Module 1 */}
                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0F172A] text-white dark:bg-white/10 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover/card:bg-[#FFD23F] group-hover/card:text-[#0F172A] transition-colors">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] dark:text-white">Dijital Varlık & Kurumsal Vitrin</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Güven veren web siteleri & ürün anlatımı</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 2 */}
                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0F172A] text-white dark:bg-white/10 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover/card:bg-[#FFD23F] group-hover/card:text-[#0F172A] transition-colors">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] dark:text-white">Görünürlük & Müşteri Kazanımı</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Arama görünürlüğü & hedefli müşteri reklamları</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 3 */}
                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0F172A] text-white dark:bg-white/10 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover/card:bg-[#FFD23F] group-hover/card:text-[#0F172A] transition-colors">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] dark:text-white">Satış & Talep Takibi</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Teklif formları, WhatsApp & düzenli kayıt</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/card:scale-125 transition-transform" />
                </div>

                {/* Module 4 */}
                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between group/card hover:border-[#FFD23F] hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0F172A] text-white dark:bg-white/10 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover/card:bg-[#FFD23F] group-hover/card:text-[#0F172A] transition-colors">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] dark:text-white">İş Süreçleri & Otomasyon</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Manuel işlemleri azaltan pratik akışlar</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/card:scale-125 transition-transform" />
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-4 pt-3.5 border-t border-[#E2E8F0] dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Tek bir dijital omurga etrafında entegre</span>
                <span className="text-[#0F172A] dark:text-white font-semibold font-mono flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  Sürekli Destek
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Continuous Marquee Ticker */}
      <div className="relative z-10 mt-14 pt-6 border-t border-[#E2E8F0] dark:border-white/10 w-full overflow-hidden">
        <div className="carousel-container max-w-6xl mx-auto">
          <div className="carousel-track flex items-center gap-8 py-2">
            {[...capabilities, ...capabilities].map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400 shrink-0 hover:text-[#0F172A] dark:hover:text-white transition-colors"
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
