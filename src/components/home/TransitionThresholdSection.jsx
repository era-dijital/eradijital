import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Layers, Split } from 'lucide-react';

export default function TransitionThresholdSection() {
  return (
    <section id="gecis-esigi" className="section-transition-threshold py-16 sm:py-20 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Accent Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD23F]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Merkezde Bağımsız 2. Uzmanlık Alanına Geçiş Rozeti */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] font-mono text-[11px] font-bold tracking-wider uppercase mb-6 shadow-md"
        >
          <Split className="w-3.5 h-3.5 text-[#FFD23F]" />
          <span>BAĞIMSIZ 2. UZMANLIK ALANINA GEÇİŞ</span>
        </motion.div>

        {/* Slogan Başlık (h2) */}
        <motion.h2 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-4"
        >
          İster Yeni Müşteri Kazanın, <br className="hidden sm:inline" />
          <span className="hl-yellow">İster Şirket İçi Düzeninizi Kurun</span>
        </motion.h2>

        {/* Açıklama (p) */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-2xl mx-auto mb-6"
        >
          İki hizmet alanımız birbirinden bağımsızdır; şirketinizin bugünkü ihtiyacına göre sadece birini seçebilir veya ikisini birlikte kullanabilirsiniz. Şimdi, içerideki operasyonu hızlandıran çözümlerimizi inceleyin:
        </motion.p>

        {/* Downward bouncing animated arrow indicator */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-200 shadow-xs"
        >
          <ArrowDown className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F]" />
        </motion.div>

      </div>
    </section>
  );
}
