import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Globe2, Users, Code2, ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, Check } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function SolutionsSection() {
  const { openWizard } = useQuoteWizard();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Tüm Çözümler' },
    { id: 'varlik', label: 'Dijital Varlık' },
    { id: 'gorunurluk', label: 'Görünürlük' },
    { id: 'satis', label: 'Satış & CRM' },
    { id: 'yazilim', label: 'Yazılım & Süreç' }
  ];

  const solutions = [
    {
      id: 'varlik',
      icon: Layout,
      title: "Dijital varlık ve kurumsal anlatım",
      desc: "Web siteleri, ürün içerikleri ve görsel iletişimle işletmenin dijitalde nasıl temsil edildiğini geliştiriyor.",
      tag: "Ön Yüz & Temsil",
      bullets: ["Modern ve dönüşüm odaklı kurumsal web", "3D ve etkileşimli ürün anlatımı", "Tutarlı kurumsal görsel kimlik"]
    },
    {
      id: 'gorunurluk',
      icon: Globe2,
      title: "Görünürlük ve müşteri kazanımı",
      desc: "İçerik, sosyal medya, SEO–GEO ve reklam çalışmalarını hedef kitleye ulaşmak için bir araya getiriyor.",
      tag: "Trafik & Talep",
      bullets: ["Arama motoru görünürlüğü (SEO & GEO)", "Hedefli performans reklamları (Google/Meta)", "Değer üreten sektörel içerik mimarisi"]
    },
    {
      id: 'satis',
      icon: Users,
      title: "Satış ve müşteri ilişkileri",
      desc: "Başvuru, teklif ve müşteri takip sistemleriyle oluşan ilginin daha düzenli yönetilmesini destekliyor.",
      tag: "Dönüşüm & CRM",
      bullets: ["Otomatik teklif & form akışları", "Müşteri adayları (Lead) takibi & kayıt", "Hızlı yanıt ve karşılama altyapısı"]
    },
    {
      id: 'yazilim',
      icon: Code2,
      title: "Yazılım ve iş süreçleri",
      desc: "Özel uygulamalar, otomasyonlar ve entegrasyonlarla işletmenin dijital işleyişini geliştiriyor.",
      tag: "Verimlilik & Kod",
      bullets: ["İş akışı otomasyonları (Webhook/API)", "Sistem & veri tabanı entegrasyonları", "İşletmeye özel mikro web uygulamaları"]
    }
  ];

  const displayedSolutions = activeFilter === 'all' 
    ? solutions 
    : solutions.filter(s => s.id === activeFilter);

  return (
    <section id="gelisim-alanlari" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-slate-200/50 dark:bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            <span>Bölüm 3 — Çözüm Yaklaşımı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            İhtiyaca göre seçilen çözümler. <br className="hidden sm:inline" />
            <span className="hl-yellow">Birlikte çalışan bir yapı.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            ERA Dijital, üretim ve teknoloji imkânlarını işletmenin hedeflerine göre kullanıyor. Her çalışma, belirli bir gelişim ihtiyacına karşılık veriyor.
          </p>
        </motion.div>

        {/* Gliding Tab Switcher with Framer Motion layoutId */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E2E8F0] dark:border-white/10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0F172A] dark:text-white font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#FFD23F] rounded-full shadow-sm"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Solution Pillars Grid with Animated Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {displayedSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  key={item.id}
                  className="group relative p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/25 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-[#0F172A] dark:bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#0F172A] dark:text-white mb-3 group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0] dark:border-white/5">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">Birlikte Çalışan Yapı</span>
                    <button
                      onClick={() => openWizard()}
                      className="btn-ghost text-xs py-2 px-4 cursor-pointer group/btn"
                    >
                      <span>Ön İnceleme İste</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section Bottom Card with Sleek Dark/Light Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FFD23F] animate-pulse" />
              <span>KUR — ÇEK — DÖNÜŞTÜR — OTOMATİKLEŞTİR İLKESİ</span>
            </div>
            <h4 className="text-base sm:text-lg font-display font-bold text-[#0F172A] dark:text-white">
              Her işletme için doğru başlangıç noktasını belirliyoruz.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Tüm hizmetleri aynı anda almak zorunda değilsiniz. ERA Dijital, önceliği en hızlı sonuç verecek gelişim alanına vererek başlar.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="btn-yellow text-xs py-3 px-5 shrink-0 cursor-pointer shadow-md group"
          >
            <span>30 Sn'de Ön Değerlendirme Al</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
