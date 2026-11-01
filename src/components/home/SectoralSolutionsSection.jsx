import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, PackageCheck, Lightbulb, Briefcase, ArrowRight, Check, TrendingUp, Cpu } from 'lucide-react';

export default function SectoralSolutionsSection() {
  const [activeTab, setActiveTab] = useState('uretici');

  const tabs = [
    { id: 'uretici', label: 'Fabrikalar ve Üreticiler', icon: Factory, formSector: 'Üretici' },
    { id: 'toptanci', label: 'Toptan Ticaret ve Dağıtım', icon: PackageCheck, formSector: 'Toptancı' },
    { id: 'arge', label: 'Ar-Ge ve Proje Stüdyoları', icon: Lightbulb, formSector: 'Ar-Ge' },
    { id: 'hizmet', label: 'Hizmet Sektörü ve Ofisler', icon: Briefcase, formSector: 'Hizmet' },
  ];

  const content = {
    uretici: {
      gelisim: "Üretim gücünüzü anlatan çok dilli web sitesi, dijital ürün kataloğu ve ihracat odaklı reklamlar.",
      donusum: "Bayi sipariş panelleri, numune/teklif takip CRM'i ve fabrika muhasebe programı entegrasyonu (API).",
      sector: "Üretici"
    },
    toptanci: {
      gelisim: "Binlerce ürünü hatasız listeleyen B2B vitrin ve toptan alıcıları hedefleyen arama görünürlüğü.",
      donusum: "Müşteriye özel iskonto/fiyat tanımlı sipariş ekranları, anlık stok ve cari bakiye eşitlemesi (API).",
      sector: "Toptancı"
    },
    arge: {
      gelisim: "Projelerinizi ve teknik gücünüzü sunan 3D görselleştirmeler, prestijli sunum sayfaları.",
      donusum: "Seri üretim kalıbına girmeden önce dijital pazar talebi testi, projeye özel yazılım ve müşteri portalları.",
      sector: "Ar-Ge"
    },
    hizmet: {
      gelisim: "Uzmanlığınızı gösteren hızlı web altyapısı, güven veren tanıtım çekimleri ve yeni danışan reklamları.",
      donusum: "Randevu ve teklifleri kaçırmayan WhatsApp karşılama akışı, CRM takibi ve otomatik fiyatlama araçları.",
      sector: "Hizmet"
    }
  };

  const handleSectorCTA = (e, sectorName) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.preselectAuditForm) {
      window.preselectAuditForm({ sector: sectorName });
    } else {
      const target = document.getElementById('durum-tespiti');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = content[activeTab];

  return (
    <section id="sektorel-cozumler" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-slate-200/40 dark:bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Sektörünüzün Gerçeklerine <span className="hl-yellow">Tam Uyum</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Üretimden perakendeye her sektörün işleyişi farklıdır; çözümlerinizi iş modelinize göre kurgulayın.
          </p>
        </motion.div>

        {/* 4 Interactive Sector Tabs */}
        <div
          role="tablist"
          aria-label="Sektör Sekmeleri"
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 pb-2 border-b border-[#E2E8F0] dark:border-white/10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                data-sector-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${isActive
                    ? 'bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] shadow-md'
                    : 'bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFD23F] dark:text-[#0F172A]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Dual Columns View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

              {/* 1. Sütun / Kart: Dijital Gelişim İle Ne Kazanırsınız? */}
              <div className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-xs font-bold text-[#0F172A] dark:text-[#FFD23F] uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#0F172A] dark:text-[#FFD23F]" />
                      DİJİTAL GELİŞİM
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] dark:text-white mb-4">
                    Dijital Gelişim İle Ne Kazanırsınız?
                  </h3>

                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {current.gelisim}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E2E8F0] dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Sektöre Özel Prestij ve Müşteri Akışı</span>
                </div>
              </div>

              {/* 2. Sütun / Kart: Dijital Dönüşüm İle Ne Kazanırsınız? */}
              <div className="p-8 sm:p-9 rounded-3xl bg-[#0B1528] text-white border border-[rgba(255,255,255,0.12)] shadow-xl flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 inline-flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#FFD23F]" />
                      DİJİTAL DÖNÜŞÜM
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                    Dijital Dönüşüm İle Ne Kazanırsınız?
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed font-light">
                    {current.donusum}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Hatasız Operasyon ve Zaman Tasarrufu</span>
                </div>
              </div>

            </div>

            {/* Sektöre Özel CTA Butonu */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="text-center sm:text-left">
                <span className="text-sm font-display font-semibold text-[#0F172A] dark:text-white">
                  {tabs.find(t => t.id === activeTab)?.label} İçin Özel Yol Haritası
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">
                  Mevcut yapınızı inceleyip sektörünüze uygun somut adımları raporlayalım.
                </p>
              </div>

              <a
                href="#durum-tespiti"
                onClick={(e) => handleSectorCTA(e, current.sector)}
                className="btn-yellow text-xs py-3 px-6 shrink-0 cursor-pointer shadow-md group inline-flex items-center gap-2"
              >
                <span>Sektörünüze Özel Durum Raporu İsteyin</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
