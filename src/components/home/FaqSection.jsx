import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

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
    <section id="sorular" className="py-24 sm:py-32 bg-[#f6f7f4] dark:bg-[#060a0f] border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Bölüm 6 — Karar Öncesi Sorular</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white">
            Başlamadan önce.
          </h2>

          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 font-light">
            Süreç, kapsam ve iş birliği modelimiz hakkında en çok merak edilen noktalar.
          </p>
        </motion.div>

        {/* Accordion List with Smooth Expand/Collapse */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/30 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.01] dark:hover:bg-white/[0.01]"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-navy-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? 'bg-petrol-700 text-white rotate-180' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
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
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 border-t border-black/[0.04] dark:border-white/[0.04] leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
