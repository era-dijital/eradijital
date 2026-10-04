import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { openWizard } = useQuoteWizard();

  const faqs = [
    {
      q: "Bütün hizmetleri birlikte almak gerekiyor mu?",
      a: "Hayır. ERA Dijital, çalışma kapsamını öncelikli ihtiyaca göre belirliyor. İş birliği tek bir projeyle başlayabiliyor."
    },
    {
      q: "Mevcut web sitesi ve sistemler kullanılabiliyor mu?",
      a: "Mevcut yapı önce değerlendiriliyor. Kullanılabilir yatırımların korunması, iyileştirilmesi veya gerekli bağlantılarla desteklenmesi seçenekleri ele alınıyor."
    },
    {
      q: "Ücretsiz ön değerlendirme neleri kapsıyor?",
      a: "Kısa ihtiyaç görüşmesini, erişilebilir dijital varlıkların ön incelemesini ve öncelikli gelişim alanlarının paylaşılmasını kapsıyor. Ayrıntılı teknik denetim ve kapsamlı yol haritası ayrıca tanımlanıyor."
    },
    {
      q: "Teslimden sonra destek devam ediyor mu?",
      a: "Bakım, teknik destek ve sürekli gelişim çalışmaları ayrı kapsamlarla planlanıyor. Destek süresi ve sorumluluklar teklif aşamasında açıklanıyor."
    }
  ];

  return (
    <section id="sorular" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-slate-200/40 dark:bg-white/[0.02] blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>Bölüm 6 — Karar Öncesi Sorular</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Başlamadan <span className="hl-yellow">önce.</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light">
            Süreç, kapsam ve iş birliği modelimiz hakkında en çok merak edilen noktalar.
          </p>
        </motion.div>

        {/* Accordion List with Refined Motion & Contrast */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`rounded-3xl bg-white dark:bg-[#0F172A] border transition-all duration-300 overflow-hidden shadow-xs ${
                  isOpen 
                    ? 'border-slate-800 dark:border-white/30 shadow-md ring-1 ring-slate-800/10 dark:ring-white/10' 
                    : 'border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-7 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className={`font-display font-semibold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-[#0F172A] dark:text-white' : 'text-[#0F172A] dark:text-slate-200'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? 'bg-[#0F172A] text-[#FFD23F] dark:bg-white dark:text-[#0F172A] rotate-180 shadow-xs' 
                      : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 border-t border-[#E2E8F0] dark:border-white/5 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Helper CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-light">
            Farklı bir sorunuz mu var veya özel kapsam mı konuşmak istiyorsunuz?
          </p>
          <button
            onClick={() => openWizard()}
            className="btn-ghost text-xs py-2 px-4 cursor-pointer group"
          >
            <span>Ön İnceleme Talep Edin</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
