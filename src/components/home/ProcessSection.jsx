import React from 'react';
import { Search, Compass, Zap, LineChart, ArrowRight, ShieldCheck } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function ProcessSection() {
  const { openWizard } = useQuoteWizard();

  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Değerlendiriyor",
      desc: "İşletmenin hedeflerini, mevcut yapısını ve öncelikli ihtiyaçlarını inceliyor."
    },
    {
      num: "02",
      icon: Compass,
      title: "Planlıyor",
      desc: "Çözüm kapsamını, uygulama sırasını, sorumlulukları ve teslimleri belirliyor."
    },
    {
      num: "03",
      icon: Zap,
      title: "Hayata geçiriyor",
      desc: "Gerekli tasarım, içerik ve teknik çalışmaları kontrol ve onay adımlarıyla uyguluyor."
    },
    {
      num: "04",
      icon: LineChart,
      title: "Takip ediyor",
      desc: "Kararlaştırılan devam kapsamına göre verileri, kullanımı ve geliştirme ihtiyaçlarını değerlendiriyor."
    }
  ];

  return (
    <section id="surec" className="py-20 sm:py-28 bg-[#fbfcfb] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span>Bölüm 5 — Çalışma Deneyimi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-tight">
            Önce öncelikler netleşiyor. <br className="hidden sm:inline" />
            <span className="text-petrol-700 dark:text-petrol-400">Sonra uygulama başlıyor.</span>
          </h2>
        </div>

        {/* 4-Step Process Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Track for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-petrol-600/30 via-navy-300/30 dark:via-white/10 to-petrol-600/30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="relative group p-6 rounded-2xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/40 dark:hover:border-petrol-400/40 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-petrol-50 dark:bg-petrol-900/30 border border-petrol-700/15 dark:border-petrol-400/25 flex items-center justify-center text-petrol-700 dark:text-petrol-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-petrol-700/60 dark:text-petrol-400/60 tracking-wider">
                      ADIM {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note & Quick CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f0f5f3] dark:bg-[#0b131e] border border-petrol-700/15 dark:border-petrol-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-petrol-700 dark:text-petrol-400 shrink-0" />
            <p className="text-sm text-navy-900 dark:text-zinc-300">
              Çalışma kapsamı, erişim yetkileri, harici giderler ve destek koşulları başlangıçta netleştiriliyor.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="ah-btn text-xs py-2.5 px-4 shrink-0 cursor-pointer"
          >
            <span className="ah-btn-text">
              <span>Ön Değerlendirme İsteyin</span>
              <span>Hemen Başlayın</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
