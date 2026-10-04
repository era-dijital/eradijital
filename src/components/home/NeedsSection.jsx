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
      desc: "Ürünlerin, hizmetlerin ve uzmanlığın daha açık, tutarlı ve güven veren bir anlatımla sunulması.",
      tag: "Kurumsal Vitrin & Temsil",
      metrics: "0.8s Altı Açılış & Güvenilirlik"
    },
    {
      num: "02",
      icon: Search,
      title: "Doğru müşteriler tarafından bulunmak",
      desc: "İçerik, arama görünürlüğü ve reklam çalışmalarının ilgili hedef kitleye yönelmesi.",
      tag: "Hedefli SEO-GEO & Reklam",
      metrics: "Net Kitle & Sıfır Boşa Bütçe"
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Gelen ilgiyi daha düzenli yönetmek",
      desc: "Mesajların, başvuruların ve teklif taleplerinin takip edilebilir bir sürece dahil edilmesi.",
      tag: "Satış & Talep Takibi",
      metrics: "Otomatik Yanıt & Lead Kaybı 0"
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Tekrarlanan işleri kolaylaştırmak",
      desc: "Dağınık bilgi ve manuel işlemlerin uygun dijital araçlarla düzenlenmesi.",
      tag: "Süreç & Otomasyon",
      metrics: "Sistem Entegrasyonu & Hız"
    }
  ];

  return (
    <section id="ihtiyaclar" className="py-24 sm:py-32 bg-[#F7F7F5] dark:bg-[#0B0F17] border-t border-[#E7E3DA] dark:border-white/10 relative overflow-hidden transition-colors duration-250">
      
      {/* Subtle Yellow Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFD23F]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD23F]/20 dark:bg-[#FFD23F]/15 border border-[#FFD23F]/40 text-[#92400E] dark:text-[#FFD23F] font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] animate-pulse" />
            <span>Bölüm 2 — İhtiyacı Tanıma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#111827] dark:text-white leading-[1.15]">
            İşletmenizin bugün <span className="hl-yellow">neye ihtiyacı var?</span>
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
                className="group relative p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E7E3DA] dark:border-white/10 hover:border-[#FFD23F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Yellow Top Indicator Strip on Hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FFD23F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#FFD23F]/20 text-[#111827] dark:text-[#FFD23F] border border-[#FFD23F]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD23F] group-hover:text-[#111827] transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
                      ADIM {item.num}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] text-[11px] font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-3 border border-black/5 dark:border-white/5">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-display font-semibold text-[#111827] dark:text-white mb-3 leading-snug group-hover:text-[#B45309] dark:group-hover:text-[#FFD23F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E3DA] dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    {item.metrics}
                  </span>
                  
                  <button
                    onClick={() => openWizard()}
                    className="w-8 h-8 rounded-full bg-[#FFD23F]/20 text-[#111827] dark:text-[#FFD23F] flex items-center justify-center group-hover:bg-[#FFD23F] group-hover:text-[#111827] transition-all duration-300 cursor-pointer shadow-sm"
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
