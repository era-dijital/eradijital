import React, { useState } from 'react';
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
    <section id="sorular" className="py-20 sm:py-28 bg-[#f6f7f4] dark:bg-[#060a0f] border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Bölüm 6 — Karar Öncesi Sorular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white">
            Başlamadan önce.
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Süreç, kapsam ve iş birliği modelimiz hakkında en çok merak edilen noktalar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.01] dark:hover:bg-white/[0.01]"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-navy-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-600 dark:text-zinc-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 border-t border-black/[0.04] dark:border-white/[0.04] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
