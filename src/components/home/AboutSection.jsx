import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Target, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function AboutSection() {
  const { openWizard } = useQuoteWizard();

  const principles = [
    {
      icon: Target,
      title: "Önce Dinliyor ve İnceliyoruz",
      desc: "Her işletmeye ezbere aynı kalıbı sunmuyoruz. Mevcut dijital varlıklarınızı, güçlü yönlerinizi ve eksiklerinizi analiz ederek işe başlıyoruz."
    },
    {
      icon: ShieldCheck,
      title: "Şeffaf Kapsam ve Net Sınırlar",
      desc: "Ne yapacağımızı, ne kadar süreceğini ve maliyet kalemlerini başlangıçta açıkça paylaşıyoruz. Süreç boyunca sürpriz harici giderler çıkarmıyoruz."
    },
    {
      icon: HeartHandshake,
      title: "Somut ve Ölçülebilir Çıktılar",
      desc: "Yalnızca gösterişli tasarımlar değil; işletmenize yeni müşteri kazandıran, talepleri düzenli toplayan ve ekibinizin işini kolaylaştıran çözümler üretiyoruz."
    }
  ];

  return (
    <section id="hakkimizda" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-slate-200/40 dark:bg-white/[0.02] blur-[140px] pointer-events-none" />

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
            <span>Biz Kimiz</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            İhtiyacı anlayan, sadeleştiren ve <br className="hidden sm:inline" />
            <span className="hl-yellow">uygulayan bir ekip.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            ERA Dijital, teknoloji jargonuyla kafa karıştırmak yerine işletmenizin gerçek ihtiyaçlarına odaklanan dijital gelişim ekibidir. Dijital varlık, arama görünürlüğü, talep karşılama ve otomasyon süreçlerini tek bir uyumlu omurga olarak ele alıyoruz.
          </p>
        </motion.div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
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

                  <h3 className="text-lg font-display font-semibold text-[#0F172A] dark:text-white mb-3">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Çalışma Standardı 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Team & Trust Note Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-bold">
              <Users className="w-3.5 h-3.5 text-[#0F172A] dark:text-white" />
              <span>GÜVENİLİR VE DOĞRUDAN İŞ ORTAĞINIZ</span>
            </div>
            <h4 className="text-base sm:text-lg font-display font-bold text-[#0F172A] dark:text-white">
              Teknoloji gösterisi değil; işletmeyi anlayan gerçek bir ekip.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              İstanbul merkezli çekirdek ekibimizle, işletmenizin ölçeğine ve dijital olgunluğuna uygun adımları birlikte planlıyor; gereksiz maliyet ve zaman kaybını önlüyoruz.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="btn-yellow text-xs py-3 px-5 shrink-0 cursor-pointer shadow-md group"
          >
            <span>Ekibimizle Tanışın & Ön Görüşme İsteyin</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
