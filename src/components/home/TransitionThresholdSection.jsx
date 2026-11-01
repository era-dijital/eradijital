import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Layers, Split } from 'lucide-react';

export default function TransitionThresholdSection() {
  return (
    <section id="gecis-esigi" className="section-transition-threshold py-16 sm:py-20 relative overflow-hidden transition-colors duration-300">

      {/* Background Accent Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD23F]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sol Kolon: Başlık ve Açıklama */}
          <div className="md:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Split className="w-3.5 h-3.5 text-[#FFD23F]" />
              <span>BAĞIMSIZ 2. UZMANLIK ALANINA GEÇİŞ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] dark:text-white tracking-tight leading-snug"
            >
              İster Yeni Müşteri Kazanın, <br className="hidden sm:inline" />
              <span className="hl-yellow">İster Şirket İçi Düzeninizi Kurun</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light"
            >
              İki hizmet alanımız birbirinden bağımsızdır; şirketinizin bugünkü ihtiyacına göre sadece birini seçebilir veya ikisini birlikte kullanabilirsiniz.
            </motion.p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
              <ArrowDown className="w-3.5 h-3.5 text-[#FFD23F] animate-bounce" />
              <span>Aşağıdaki operasyonel çözümleri inceleyin</span>
            </div>
          </div>

          {/* Sağ Kolon: Kompakt Mimari İkili Köprü Görseli */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 shadow-sm aspect-[4/3] max-h-52 w-full bg-slate-100 dark:bg-white/5">
              <img
                src="/resimler/ikili-yapi/transition-dual-path.jpg"
                alt="İki bağımsız uzmanlık alanını simgeleyen modern mimari geçiş"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
