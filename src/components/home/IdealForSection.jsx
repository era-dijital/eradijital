import React from 'react';
import { motion } from 'framer-motion';
import { Store, Building2, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function IdealForSection() {
  const { openWizard } = useQuoteWizard();

  const businessTiers = [
    {
      icon: Store,
      scale: "Yerel & Butik İşletmeler",
      target: "Atölye, Perakende, Butik & Yerel Markalar",
      value: "Güven veren hızlı kurumsal vitrin, Google Harita görünürlüğü ve müşterilerin doğrudan WhatsApp'tan ulaşabileceği sade akışlar."
    },
    {
      icon: Building2,
      scale: "Profesyonel Hizmet Firmaları",
      target: "Mimarlık, Danışmanlık, Klinik & Uzman Ofisler",
      value: "Uzmanlığı net anlatan portfolyo/vaka sayfaları, nitelikli randevu ve teklif formları ile düzenli müşteri adayı takibi."
    },
    {
      icon: TrendingUp,
      scale: "Büyüyen Şirketler & E-Ticaret",
      target: "KOBİ, İhracat & Dijital Ticaret Markaları",
      value: "Çok kanallı reklam yönetimi, veri entegrasyonları, otomatik teklif hesaplayıcıları ve operasyonel hız kazandıran otomasyonlar."
    }
  ];

  return (
    <section id="kimler-icin" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-slate-200/40 dark:bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>Hedef Kitle & Ölçek</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Kimler İçin İdeal? <br className="hidden sm:inline" />
            <span className="hl-yellow">Her Ölçekte Doğru Dijital Adım</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Dijital dönüşüm sadece dev holdinglere özel bir lüks değildir. İşletmenizin mevcut büyüklüğüne ve bütçesine en uygun, pratik ve ölçülebilir çözümleri kurguluyoruz.
          </p>
        </motion.div>

        {/* Panoramic Triptych Visual Showcase (Bölüm 6 - Kimler için ideal?) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 bg-slate-950 shadow-2xl relative group"
        >
          <img 
            src="/resimler/kurumsal/kimler-icin-ideal.jpg" 
            alt="Farklı Ölçeklerde İşletmeler İçin Dijital Gelişim - Era Dijital"
            className="w-full aspect-[21/9] sm:aspect-[16/7] object-cover group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent pointer-events-none" />
          
          {/* Overlay Tier Badges matching the 3 panels */}
          <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 grid grid-cols-3 gap-2 sm:gap-4 text-white font-mono text-[10px] sm:text-xs">
            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center truncate">
              <span className="text-[#FFD23F] font-bold">01</span> Butik & Yerel
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center truncate">
              <span className="text-[#FFD23F] font-bold">02</span> Profesyonel Hizmet
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center truncate">
              <span className="text-[#FFD23F] font-bold">03</span> Büyüyen KOBİ & E-Ticaret
            </div>
          </div>
        </motion.div>

        {/* 3 Tier Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {businessTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/25 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] dark:bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-xs mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {tier.scale}
                  </span>

                  <h3 className="text-lg font-display font-bold text-[#0F172A] dark:text-white mb-3">
                    {tier.target}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {tier.value}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Ölçeğe Uygun Kapsam
                  </span>
                  
                  <button 
                    onClick={() => openWizard()}
                    className="text-xs text-slate-700 dark:text-slate-300 group-hover:text-[#0F172A] dark:group-hover:text-[#FFD23F] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Analiz İste</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
