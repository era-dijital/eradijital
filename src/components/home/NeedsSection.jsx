import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, MessageSquare, RefreshCw, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function NeedsSection() {
  const { openWizard } = useQuoteWizard();

  const needs = [
    {
      icon: Sparkles,
      title: "İşletmenizin Gücünü Daha İyi Yansıtmak",
      desc: "Ürünlerinizi, hizmetlerinizi ve uzmanlığınızı ziyaretçiye daha açık, tutarlı ve güven veren bir kurumsal vitrinle sunun.",
      tag: "Kurumsal Vitrin & Temsil",
      metrics: "Hızlı ve güven veren kurumsal vitrin"
    },
    {
      icon: Search,
      title: "Doğru Müşteriler Tarafından Bulunmak",
      desc: "Arama görünürlüğü ve reklam çalışmalarını genel kitle yerine doğrudan hizmetinizi arayan potansiyel müşterilere yönlendirin.",
      tag: "Hedefli Arama & Reklam",
      metrics: "Bütçeyi doğru kitleye yönlendirme"
    },
    {
      icon: MessageSquare,
      title: "Gelen İlgiyi Daha Düzenli Yönetmek",
      desc: "Web sitesinden ve WhatsApp'tan gelen mesajları, teklif taleplerini ve formları tek bir düzenli takip akışına bağlayın.",
      tag: "Satış & Talep Takibi",
      metrics: "Mesaj ve taleplerin anlık takibi"
    },
    {
      icon: RefreshCw,
      title: "Tekrarlanan İşleri Kolaylaştırmak",
      desc: "Dağınık bilgi ve manuel işlemleri uygun dijital araçlar ve otomasyonlarla düzenleyerek operasyonel hız kazanın.",
      tag: "Süreç & Düzen",
      metrics: "Manuel iş yükünü azaltan akış"
    }
  ];

  return (
    <section id="ihtiyaclar" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-slate-200/40 dark:bg-white/[0.02] blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>İhtiyaç Analizi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            İşletmenizin Bugün <span className="hl-yellow">Neye İhtiyacı Var?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Dijital gelişim her işletmede aynı noktadan başlamaz. Önceliği mevcut dijital durumunuza ve hedeflerinize göre birlikte belirliyoruz.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Distinctive Spring & Hover Lift Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/25 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => openWizard()}
              >
                <div>
                  <div className="mb-6">
                    {/* Sophisticated Dark Ink Icon Box with Micro-Motion */}
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] dark:bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-[#0F172A] dark:text-white mb-3 leading-snug group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.metrics}
                  </span>
                  
                  {/* Interactive Arrow Button with Bounce */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white flex items-center justify-center group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
