import React from 'react';
import { ArrowUpRight, ArrowRight, Layers, Sparkles, CheckCircle2, Globe, Cpu, Users } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function HeroSection() {
  const { openWizard } = useQuoteWizard();

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden hairline-b">
      {/* AnalyticaHouse Style Ambient Glow */}
      <div className="ah-glow-bg top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-petrol-500/15 via-petrol-700/5 to-transparent blur-[130px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Upper Definition / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-petrol-600 dark:bg-petrol-400 animate-pulse" />
              <span>Dijital Gelişim ve Dönüşüm Ajansı</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.12]">
              İşinizin bir sonraki adımında.
            </h1>

            {/* Spot Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed">
              ERA Dijital, işletmenizin dijital gelişim önceliklerini belirliyor; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyor.
            </p>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => openWizard()}
                  className="ah-btn text-sm py-3.5 px-6 shadow-md cursor-pointer"
                >
                  <span className="ah-btn-inner">
                    <span className="ah-btn-text">
                      <span>Ücretsiz ön değerlendirme iste</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="ah-btn-text text-white/95">
                      <span>30 Sn'de Analizi Başlat</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                </button>

                <a
                  href="#gelisim-alanlari"
                  className="ah-btn-secondary text-sm py-3.5 px-6 cursor-pointer"
                >
                  <span>Gelişim alanlarını incele</span>
                  <span className="ml-1 text-xs opacity-70">↓</span>
                </a>
              </div>

              {/* Sub-button Note */}
              <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-1 font-sans">
                Kısa bir ihtiyaç görüşmesi ve mevcut dijital varlıkların ön incelemesiyle başlıyor.
              </p>
            </div>
          </div>

          {/* Right Column: Interconnected Modules Diagram (PDF Sayfa 6 Önerisi) */}
          <div className="lg:col-span-5">
            <div className="ah-card p-6 sm:p-7 relative overflow-hidden bg-white/80 dark:bg-[#0D1522]/90 backdrop-blur-md shadow-xl dark:shadow-2xl">
              
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/5 dark:border-white/5">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                  Entegre Gelişim Mimarisi
                </span>
                <span className="text-[11px] font-mono text-petrol-700 dark:text-petrol-300 font-bold bg-petrol-500/10 px-2.5 py-0.5 rounded-full">
                  4 Bağlantılı Modül
                </span>
              </div>

              {/* 4 Connected Modules */}
              <div className="space-y-3 relative">
                
                {/* Module 1 */}
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-petrol-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900 dark:text-white">Dijital Varlık & Kurumsal Anlatım</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Web siteleri & tutarlı görsel kimlik</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-600 dark:bg-petrol-400" />
                </div>

                {/* Module 2 */}
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-petrol-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900 dark:text-white">Görünürlük & Müşteri Kazanımı</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Hedefli arama, içerik & reklam</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-600 dark:bg-petrol-400" />
                </div>

                {/* Module 3 */}
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-petrol-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900 dark:text-white">Satış & Müşteri İlişkileri</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Başvuru, teklif & talep takibi</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-600 dark:bg-petrol-400" />
                </div>

                {/* Module 4 */}
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-petrol-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-mono font-bold text-xs">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900 dark:text-white">Yazılım & İş Süreçleri</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Otomasyonlar & entegrasyonlar</div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-petrol-600 dark:bg-petrol-400" />
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span>Birbirine bağlı çalışan dijital omurga</span>
                <span className="text-petrol-700 dark:text-petrol-400 font-semibold font-mono">Birlikte Çalışan Yapı</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
