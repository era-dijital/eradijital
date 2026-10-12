import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, LineChart } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Değerlendiriyoruz",
      desc: "İşletmenizin hedeflerini, mevcut dijital varlıklarını ve öncelikli ihtiyaçlarını detaylıca inceliyoruz.",
      tag: "Ön İnceleme"
    },
    {
      icon: Compass,
      title: "Planlıyoruz",
      desc: "Çözüm kapsamını, uygulama sırasını, sorumlulukları ve teslim tarihlerini net bir yol haritasıyla belirliyoruz.",
      tag: "Yol Haritası"
    },
    {
      icon: Zap,
      title: "Hayata Geçiriyoruz",
      desc: "Gerekli tasarım, içerik ve teknik geliştirmeleri düzenli onay ve kontrol adımlarıyla uyguluyoruz.",
      tag: "Uygulama"
    },
    {
      icon: LineChart,
      title: "Takip Ediyoruz",
      desc: "Kararlaştırılan devam kapsamına göre verileri, performansı ve geliştirme ihtiyaçlarını birlikte değerlendiriyoruz.",
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
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            İhtiyaçlarınızı Netleştiriyor, <br className="hidden sm:inline" />
            <span className="hl-yellow">Uygulamaya Başlıyoruz</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Belirsizlikleri ortadan kaldıran, 4 adımlı kontrollü ve şeffaf çalışma akışımız.
          </p>
        </motion.div>

        {/* Visual Roadmap Illustration Banner (Bölüm 4 - Dijital Dönüşüm Süreci) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-16 rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 bg-[#0F172A] shadow-xl relative group"
        >
          <img 
            src="/resimler/kurumsal/dijital-donusum-sureci.jpg" 
            alt="4 Aşamalı Dijital Dönüşüm Süreci - Analiz, Planlama, Uygulama, Geliştirme"
            className="w-full aspect-[21/9] sm:aspect-[16/7] object-cover group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 right-5 sm:right-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/90 font-mono">
            <span className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FFD23F] animate-pulse" />
              Süreç Mimarisi: 01 Analiz → 02 Planlama → 03 Uygulama → 04 Sürekli Gelişim
            </span>
            <span className="text-slate-400 text-[11px]">Şeffaf ve Kontrollü Yol Haritası</span>
          </div>
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
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-[#0F172A] dark:text-white mb-2.5 group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
