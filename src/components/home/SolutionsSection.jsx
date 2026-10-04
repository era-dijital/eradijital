import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Globe2, Users, Code2, ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
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
    <section id="gelisim-alanlari" className="py-24 sm:py-32 bg-[#fbfcfb] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ah-glow-bg top-1/3 right-0 w-[500px] h-[500px] bg-petrol-500/10 dark:bg-petrol-400/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 animate-pulse" />
            <span>Bölüm 3 — Çözüm Yaklaşımı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
            İhtiyaca göre seçilen çözümler. <br className="hidden sm:inline" />
            <span className="text-petrol-700 dark:text-petrol-400">Birlikte çalışan bir yapı.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            ERA Dijital, üretim ve teknoloji imkânlarını işletmenin hedeflerine göre kullanıyor. Her çalışma, belirli bir gelişim ihtiyacına karşılık veriyor.
          </p>
        </motion.div>

        {/* AnalyticaHouse Interactive Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`section-button text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'active bg-petrol-700 text-white border-petrol-700 shadow-md scale-105'
                    : 'bg-white dark:bg-[#0d1522] text-zinc-600 dark:text-zinc-300 border-black/10 dark:border-white/10 hover:border-petrol-600/40 hover:text-petrol-700 dark:hover:text-white'
                }`}
              >
                {tab.label}
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  key={item.id}
                  className="group relative p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/50 dark:hover:border-petrol-400/50 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top indicator beam */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-petrol-600 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-petrol-50 dark:bg-petrol-900/30 border border-petrol-700/15 dark:border-petrol-400/25 flex items-center justify-center text-petrol-700 dark:text-petrol-300 group-hover:scale-110 group-hover:bg-petrol-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono font-medium text-petrol-800 dark:text-petrol-300 border border-black/5 dark:border-white/5">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-navy-900 dark:text-white mb-3 group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-black/5 dark:border-white/5">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 group-hover:text-navy-900 dark:group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-petrol-600 dark:text-petrol-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-mono">Birlikte Çalışan Yapı</span>
                    <button
                      onClick={() => openWizard()}
                      className="ah-button button-outline text-xs py-2 px-3.5"
                    >
                      <span>
                        <span className="text-primary">
                          Ön İnceleme İste <ArrowUpRight className="w-3 h-3 ml-1" />
                        </span>
                        <span className="text-secondary">
                          Detayı Gör <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section Bottom Card & Analysis CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#eef4f1] dark:bg-[#0b131e] border border-petrol-700/15 dark:border-petrol-400/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-petrol-800 dark:text-petrol-300 font-bold">
              <Sparkles className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
              <span>KUR — ÇEK — DÖNÜŞTÜR — OTOMATİKLEŞTİR İLKESİ</span>
            </div>
            <h4 className="text-base sm:text-lg font-display font-bold text-navy-900 dark:text-white">
              Her işletme için doğru başlangıç noktasını belirliyoruz.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              Tüm hizmetleri aynı anda almak zorunda değilsiniz. ERA Dijital, önceliği en hızlı sonuç verecek gelişim alanına vererek başlar.
            </p>
          </div>
          <button
            onClick={() => openWizard()}
            className="ah-button text-xs py-3 px-5 shrink-0"
          >
            <span>
              <span className="text-primary">
                30 Sn'de Ön Değerlendirme Al <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </span>
              <span className="text-secondary">
                Hemen Analizi Başlat <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
