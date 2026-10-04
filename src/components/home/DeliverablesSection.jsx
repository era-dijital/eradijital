import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Cpu, Layers, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function DeliverablesSection() {
  const { openWizard } = useQuoteWizard();

  const deliverables = [
    {
      category: "DİJİTAL PLATFORM & WEB ÇALIŞMASI",
      title: "Hızlı, Güven Veren ve Teklife Yönlendiren Kurumsal Web Altyapısı",
      need: "Ziyaretçiyi kaçıran hantal vitrin siteleri yerine, doğrudan teklif ve randevuya yönlendiren hızlı bir altyapı.",
      work: "Vite + React & Tailwind CSS ile 0.8s altı açılış hızı, Ramses modeli 30 saniyelik etkileşimli teklif hesaplayıcısı.",
      output: "99/100 Core Web Vitals Skoru & Otomatik Lead Yönlendirmesi",
      badge: "CANLI WEB ÇALIŞMASI",
      icon: Globe
    },
    {
      category: "PRODÜKSİYON & GÖRSEL İLETİŞİM",
      title: "Ürün ve Hizmet Yetkinliğini Somutlaştıran Dijital İçerik Seti",
      need: "Uzmanlığı ve ürün kalitesini potansiyel müşteriye güven verici bir netlikle aktarmak.",
      work: "Gerçek üretim/saha görselleri, sadeleştirilmiş 3D demonstrasyonlar ve tutarlı kurumsal anlatım dili.",
      output: "Çok Kanallı Dijital Varlık Kiti & Satış Sunumu Kataloğu",
      badge: "İÇERİK & GÖRSELLEŞTİRME",
      icon: Layers
    },
    {
      category: "İŞ SÜREÇLERİ & OTOMASYON",
      title: "Gelen Talepleri Otomatik Karşılayan & Kaydeden CRM İş Akışı",
      need: "Mesajların, tekliflerin ve formların WhatsApp ve Excel arasında kaybolmasını önlemek.",
      work: "Web formu ve WhatsApp Webhook entegrasyonu, n8n/Make tabanlı anlık bildirim ve müşteri paneli senkronizasyonu.",
      output: "7/24 Kesintisiz Talep Takip Sistemi & Otomatik Müşteri Bildirimi",
      badge: "DEMO OTOMASYON UYGULAMASI",
      icon: Cpu
    }
  ];

  return (
    <section id="yetkinlik" className="py-24 sm:py-32 bg-[#f6f7f4] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span>Bölüm 4 — Yetkinliğin Görünür Olması</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
            Yaklaşımın uygulamadaki karşılığı.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            İkna gücünü abartılı iddialardan değil, somut işten alıyoruz. Her çalışma aynı net düzeni izler: <br className="hidden sm:inline" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-petrol-800 dark:text-petrol-300">
              İhtiyaç → Yapılan Çalışma → Gösterilebilir Çıktı
            </span>
          </p>
        </motion.div>

        {/* Deliverable Cards Grid */}
        <div className="space-y-8">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] hover:border-petrol-600/40 dark:hover:border-petrol-400/40 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-petrol-50 dark:bg-petrol-900/30 text-petrol-700 dark:text-petrol-300 flex items-center justify-center border border-petrol-700/15 group-hover:bg-petrol-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-navy-900 dark:text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="self-start px-3 py-1 rounded-full bg-petrol-500/10 text-petrol-800 dark:text-petrol-300 border border-petrol-600/20 text-xs font-mono font-medium">
                    {item.badge}
                  </span>
                </div>

                {/* 3 Step Formula */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  
                  {/* Step 1: Need */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      1. İhtiyaç
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                      {item.need}
                    </p>
                  </div>

                  {/* Step 2: Work Done */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-petrol-700 dark:text-petrol-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-petrol-600" />
                      2. Yapılan Çalışma
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                      {item.work}
                    </p>
                  </div>

                  {/* Step 3: Tangible Output */}
                  <div className="space-y-2 p-4 rounded-2xl bg-[#f0f6f4] dark:bg-petrol-950/20 border border-petrol-700/15 dark:border-petrol-400/20">
                    <div className="text-xs font-mono font-bold text-petrol-800 dark:text-petrol-300 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-petrol-700 dark:text-petrol-400" />
                      3. Gösterilebilir Çıktı
                    </div>
                    <p className="text-sm font-medium text-navy-900 dark:text-white leading-relaxed">
                      {item.output}
                    </p>
                  </div>

                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-zinc-500">
                  <span>Gerçek uygulama mimarisi</span>
                  <button
                    onClick={() => openWizard()}
                    className="text-xs font-semibold text-petrol-700 dark:text-petrol-400 group-hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Benzer İhtiyaç İçin Ön Değerlendirme İste</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
