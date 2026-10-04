import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, MessageSquare, RefreshCw, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function NeedsSection() {
  const { openWizard } = useQuoteWizard();

  const needs = [
    {
      num: "01",
      icon: Sparkles,
      title: "İşletmenin gücünü daha iyi yansıtmak",
      highlightWord: "gücünü",
      desc: "Ürünlerin, hizmetlerin ve uzmanlığın daha açık, tutarlı ve güven veren bir anlatımla sunulması.",
      tag: "Kurumsal Vitrin & Temsil",
      metrics: "0.8s Altı Açılış & Güvenilirlik"
    },
    {
      num: "02",
      icon: Search,
      title: "Doğru müşteriler tarafından bulunmak",
      highlightWord: "bulunmak",
      desc: "İçerik, arama görünürlüğü ve reklam çalışmalarının ilgili hedef kitleye yönelmesi.",
      tag: "Hedefli SEO-GEO & Reklam",
      metrics: "Net Kitle & Sıfır Boşa Bütçe"
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Gelen ilgiyi daha düzenli yönetmek",
      highlightWord: "yönetmek",
      desc: "Mesajların, başvuruların ve teklif taleplerinin takip edilebilir bir sürece dahil edilmesi.",
      tag: "Satış & Talep Takibi",
      metrics: "Otomatik Yanıt & Lead Kaybı 0"
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Tekrarlanan işleri kolaylaştırmak",
      highlightWord: "kolaylaştırmak",
      desc: "Dağınık bilgi ve manuel işlemlerin uygun dijital araçlarla düzenlenmesi.",
      tag: "Süreç & Otomasyon",
      metrics: "Sistem Entegrasyonu & Hız"
    }
  ];

  return (
    <section id="ihtiyaclar" className="py-24 sm:py-32 bg-[#f6f7f4] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* AnalyticaHouse style ambient glow */}
      <div className="ah-glow-bg top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-petrol-500/10 dark:bg-petrol-400/10 blur-[130px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 animate-pulse" />
            <span>Bölüm 2 — İhtiyacı Tanıma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
            İşletmenizin bugün <span className="text-petrol-700 dark:text-petrol-400">neye ihtiyacı var?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            Dijital gelişim her işletmede aynı noktadan başlamıyor. ERA Dijital, önceliği mevcut duruma göre belirliyor.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Rich Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/50 dark:hover:border-petrol-400/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Card Top Gradient Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-petrol-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-petrol-50 dark:bg-petrol-900/30 border border-petrol-700/15 dark:border-petrol-400/25 flex items-center justify-center text-petrol-700 dark:text-petrol-300 group-hover:scale-110 group-hover:bg-petrol-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-petrol-700/60 dark:text-petrol-400/60 tracking-wider">
                      ADIM {item.num}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] text-[11px] font-mono font-medium text-petrol-700 dark:text-petrol-300 mb-3 border border-black/5 dark:border-white/5">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-display font-semibold text-navy-900 dark:text-white mb-3 leading-snug group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    {item.metrics}
                  </span>
                  
                  <button
                    onClick={() => openWizard()}
                    className="w-8 h-8 rounded-full bg-petrol-50 dark:bg-petrol-900/40 text-petrol-700 dark:text-petrol-300 flex items-center justify-center group-hover:bg-petrol-600 group-hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
