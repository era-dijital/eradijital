import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, MessageSquare, RefreshCw, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function NeedsSection() {
  const { openWizard } = useQuoteWizard();

  const needs = [
    {
      num: "01",
      icon: Sparkles,
      title: "İşletmenin gücünü daha iyi yansıtmak",
      desc: "Ürünlerin, hizmetlerin ve uzmanlığın daha açık, tutarlı ve güven veren bir anlatımla sunulması."
    },
    {
      num: "02",
      icon: Search,
      title: "Doğru müşteriler tarafından bulunmak",
      desc: "İçerik, arama görünürlüğü ve reklam çalışmalarının ilgili hedef kitleye yönelmesi."
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Gelen ilgiyi daha düzenli yönetmek",
      desc: "Mesajların, başvuruların ve teklif taleplerinin takip edilebilir bir sürece dahil edilmesi."
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Tekrarlanan işleri kolaylaştırmak",
      desc: "Dağınık bilgi ve manuel işlemlerin uygun dijital araçlarla düzenlenmesi."
    }
  ];

  return (
    <section id="ihtiyaclar" className="py-24 sm:py-32 bg-[#f6f7f4] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span>Bölüm 2 — İhtiyacı Tanıma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
            İşletmenizin bugün neye ihtiyacı var?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            Dijital gelişim her işletmede aynı noktadan başlamıyor. ERA Dijital, önceliği mevcut duruma göre belirliyor.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/40 dark:hover:border-petrol-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-petrol-50 dark:bg-petrol-900/30 border border-petrol-700/15 dark:border-petrol-400/25 flex items-center justify-center text-petrol-700 dark:text-petrol-300 group-hover:scale-110 group-hover:bg-petrol-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-petrol-700/50 dark:text-petrol-400/50">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white mb-3 leading-snug group-hover:text-petrol-700 dark:group-hover:text-petrol-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Gelişim Alanı</span>
                  <button
                    onClick={() => openWizard()}
                    className="text-xs font-medium text-petrol-700 dark:text-petrol-400 group-hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>İncele</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
