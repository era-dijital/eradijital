import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, LineChart, ArrowRight, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function ProcessSection() {
  const { openWizard } = useQuoteWizard();

  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Değerlendiriyor",
      desc: "İşletmenin hedeflerini, mevcut yapısını ve öncelikli ihtiyaçlarını inceliyor.",
      tag: "Ön İnceleme"
    },
    {
      num: "02",
      icon: Compass,
      title: "Planlıyor",
      desc: "Çözüm kapsamını, uygulama sırasını, sorumlulukları ve teslimleri belirliyor.",
      tag: "Yol Haritası"
    },
    {
      num: "03",
      icon: Zap,
      title: "Hayata geçiriyor",
      desc: "Gerekli tasarım, içerik ve teknik çalışmaları kontrol ve onay adımlarıyla uyguluyor.",
      tag: "Uygulama"
    },
    {
      num: "04",
      icon: LineChart,
      title: "Takip ediyor",
      desc: "Kararlaştırılan devam kapsamına göre verileri, kullanımı ve geliştirme ihtiyaçlarını değerlendiriyor.",
      tag: "Süreklilik"
    }
  ];

  return (
    <section id="surec" className="py-24 sm:py-32 bg-[#fbfcfb] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ah-glow-bg top-1/2 left-1/4 w-96 h-96 bg-petrol-500/10 dark:bg-petrol-400/10 blur-[130px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 animate-pulse" />
            <span>Bölüm 5 — Çalışma Deneyimi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
            Önce öncelikler netleşiyor. <br className="hidden sm:inline" />
            <span className="text-petrol-700 dark:text-petrol-400">Sonra uygulama başlıyor.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            Belirsizlikleri ortadan kaldıran, 4 adımlı kontrollü ve şeffaf çalışma akışı.
          </p>
        </motion.div>

        {/* 4-Step Process Grid with Connecting Beam */}
        <div className="relative">
          {/* Subtle Horizontal Track with Gradient for Desktop */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-petrol-600/40 via-petrol-400/40 to-petrol-600/40 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="relative group p-7 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/50 dark:hover:border-petrol-400/50 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-petrol-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-petrol-50 dark:bg-petrol-900/30 border border-petrol-700/15 dark:border-petrol-400/25 flex items-center justify-center text-petrol-700 dark:text-petrol-300 group-hover:scale-110 group-hover:bg-petrol-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-petrol-700 dark:text-petrol-400 tracking-wider">
                        ADIM {step.num}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] text-[11px] font-mono font-medium text-petrol-700 dark:text-petrol-300 mb-3 border border-black/5 dark:border-white/5">
                      {step.tag}
                    </span>

                    <h3 className="text-xl font-display font-semibold text-navy-900 dark:text-white mb-2.5 group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5 text-petrol-700 dark:text-petrol-400 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Kontrollü Teslimat
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note & AnalyticaHouse Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-7 rounded-3xl bg-[#f0f5f3] dark:bg-[#0b131e] border border-petrol-700/15 dark:border-petrol-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-petrol-700 dark:text-petrol-400" />
            </div>
            <p className="text-sm text-navy-900 dark:text-zinc-200 font-light">
              Çalışma kapsamı, erişim yetkileri, harici giderler ve destek koşulları başlangıçta netleştiriliyor.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="ah-button text-xs py-3 px-5 shrink-0"
          >
            <span>
              <span className="text-primary">
                Ön Değerlendirme İsteyin <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </span>
              <span className="text-secondary">
                Hemen Başlayın <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
