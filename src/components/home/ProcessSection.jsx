import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, LineChart, ArrowRight, ShieldCheck, Check } from 'lucide-react';
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
    <section id="surec" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-slate-200/50 dark:bg-white/[0.02] blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>Bölüm 5 — Çalışma Deneyimi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Önce öncelikler netleşiyor. <br className="hidden sm:inline" />
            <span className="hl-yellow">Sonra uygulama başlıyor.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Belirsizlikleri ortadan kaldıran, 4 adımlı kontrollü ve şeffaf çalışma akışı.
          </p>
        </motion.div>

        {/* 4-Step Process Grid with Connecting Track */}
        <div className="relative">
          {/* Subtle Horizontal Track for Desktop */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-[#E2E8F0] dark:bg-white/10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="relative group p-7 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/25 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-[#0F172A] dark:bg-white/10 text-white flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                        ADIM {step.num}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 mb-3 border border-slate-200 dark:border-white/5">
                      {step.tag}
                    </span>

                    <h3 className="text-xl font-display font-semibold text-[#0F172A] dark:text-white mb-2.5 group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      Kontrollü Teslimat
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note & Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-7 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 font-light">
              Çalışma kapsamı, erişim yetkileri, harici giderler ve destek koşulları başlangıçta netleştiriliyor.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="btn-yellow text-xs py-3 px-5 shrink-0 cursor-pointer shadow-md group"
          >
            <span>Ön Değerlendirme İsteyin</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
