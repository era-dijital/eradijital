import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, AlertCircle, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function RealProjectsSection() {
  const { openWizard } = useQuoteWizard();

  const projects = [
    {
      badge: "DİJİTAL GELİŞİM",
      icon: Globe,
      theme: "light",
      problem: "Fabrikanın modern üretim kapasitesi eski web sitesinde görünmüyordu.",
      solution: "Çok dilli B2B web mimarisi, fabrika video prodüksiyonu ve hedefli yurt dışı reklamları.",
      result: "Yurt dışından düzenli toptan teklif talebi akışı sağlandı."
    },
    {
      badge: "DİJİTAL DÖNÜŞÜM",
      icon: Cpu,
      theme: "navy",
      problem: "Gelen toptan siparişler ve teklifler WhatsApp ile Excel arasında kayboluyordu.",
      solution: "Şirkete özel bayi sipariş ekranı, CRM kurulumu ve muhasebe programı API entegrasyonu.",
      result: "Manuel sipariş işleme süresi sıfırlandı, hiçbir müşteri teklifi yanıtsız kalmadı."
    }
  ];

  return (
    <section id="ornek-isler" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-slate-200/40 dark:bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>Gerçek Projeler</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Sözde Değil, <span className="hl-yellow">Sahada Çalışan Sonuçlar</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            İşletmenizin gerçek potansiyelini ortaya çıkaran ve pazar payınızı büyüten çözümler üretiyoruz.
          </p>
        </motion.div>

        {/* 2 Proje Kartı (.projects-dual-grid) */}
        <div className="projects-dual-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            const isNavy = p.theme === 'navy';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-md ${
                  isNavy
                    ? 'bg-[#0B1528] text-white border border-[rgba(255,255,255,0.12)]'
                    : 'bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10'
                }`}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-xs ${
                      isNavy
                        ? 'bg-white/10 text-white'
                        : 'bg-[#0F172A] dark:bg-white/10 text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                      isNavy
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'bg-slate-100 dark:bg-white/5 text-[#0F172A] dark:text-[#FFD23F] border border-slate-200 dark:border-white/10'
                    }`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Sorun / Çözüm / Sonuç Adımları */}
                  <div className="space-y-5">
                    
                    {/* Sorun */}
                    <div className="space-y-1.5">
                      <div className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                        isNavy ? 'text-rose-400' : 'text-rose-600 dark:text-rose-400'
                      }`}>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Sorun</span>
                      </div>
                      <p className={`text-sm leading-relaxed font-light ${
                        isNavy ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                      }`}>
                        {p.problem}
                      </p>
                    </div>

                    {/* Çözüm */}
                    <div className="space-y-1.5">
                      <div className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                        isNavy ? 'text-[#FFD23F]' : 'text-amber-600 dark:text-[#FFD23F]'
                      }`}>
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Çözüm</span>
                      </div>
                      <p className={`text-sm leading-relaxed font-light ${
                        isNavy ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                      }`}>
                        {p.solution}
                      </p>
                    </div>

                    {/* Sonuç */}
                    <div className={`p-4 rounded-2xl border space-y-1.5 ${
                      isNavy 
                        ? 'bg-emerald-950/30 border-emerald-500/30 text-white' 
                        : 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-500/30'
                    }`}>
                      <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Sonuç</span>
                      </div>
                      <p className={`text-sm font-medium ${
                        isNavy ? 'text-emerald-200' : 'text-emerald-950 dark:text-emerald-200'
                      }`}>
                        {p.result}
                      </p>
                    </div>

                  </div>
                </div>

                <div className={`pt-6 mt-8 border-t flex items-center justify-between text-xs ${
                  isNavy ? 'border-white/10 text-slate-400' : 'border-[#E2E8F0] dark:border-white/5 text-slate-500'
                }`}>
                  <span className="font-mono">Doğrulanmış Saha Çıktısı</span>
                  <a
                    href="#durum-tespiti"
                    className={`font-semibold hover:underline flex items-center gap-1 ${
                      isNavy ? 'text-[#FFD23F]' : 'text-[#0F172A] dark:text-[#FFD23F]'
                    }`}
                  >
                    <span>Benzer Proje İsteyin</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
