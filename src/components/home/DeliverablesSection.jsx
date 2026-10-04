import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Cpu, Layers, ExternalLink, ArrowUpRight, Gauge, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function DeliverablesSection() {
  const { openWizard } = useQuoteWizard();

  const deliverables = [
    {
      category: "DİJİTAL PLATFORM & WEB ÇALIŞMASI",
      title: "Hızlı, Güven Veren ve Teklife Yönlendiren Kurumsal Web Altyapısı",
      need: "Ziyaretçiyi kaçıran hantal vitrin siteleri yerine, doğrudan teklif ve randevuya yönlendiren hızlı bir altyapı.",
      work: "Vite + React & Tailwind CSS ile 0.8s altı açılış hızı, 30 saniyelik etkileşimli teklif hesaplayıcısı entegrasyonu.",
      output: "99/100 Core Web Vitals Skoru & Otomatik Lead Yönlendirmesi",
      badge: "CANLI WEB ÇALIŞMASI",
      icon: Globe,
      metricVal: "99/100",
      metricLabel: "Hız & Performans"
    },
    {
      category: "PRODÜKSİYON & GÖRSEL İLETİŞİM",
      title: "Ürün ve Hizmet Yetkinliğini Somutlaştıran Dijital İçerik Seti",
      need: "Uzmanlığı ve ürün kalitesini potansiyel müşteriye güven verici bir netlikle aktarmak.",
      work: "Gerçek üretim/saha görselleri, sadeleştirilmiş 3D demonstrasyonlar ve tutarlı kurumsal anlatım dili.",
      output: "Çok Kanallı Dijital Varlık Kiti & Satış Sunumu Kataloğu",
      badge: "İÇERİK & GÖRSELLEŞTİRME",
      icon: Layers,
      metricVal: "3D & 4K",
      metricLabel: "Görsel Standart"
    },
    {
      category: "İŞ SÜREÇLERİ & OTOMASYON",
      title: "Gelen Talepleri Otomatik Karşılayan & Kaydeden CRM İş Akışı",
      need: "Mesajların, tekliflerin ve formların WhatsApp ve Excel arasında kaybolmasını önlemek.",
      work: "Web formu ve WhatsApp Webhook entegrasyonu, n8n tabanlı anlık bildirim ve müşteri takip paneli senkronizasyonu.",
      output: "7/24 Kesintisiz Talep Takip Sistemi & Otomatik Müşteri Bildirimi",
      badge: "DEMO OTOMASYON UYGULAMASI",
      icon: Cpu,
      metricVal: "< 1.2 Sn",
      metricLabel: "Otomasyon Yanıtı"
    }
  ];

  return (
    <section id="yetkinlik" className="py-28 sm:py-36 ah-dark-radial text-white relative overflow-hidden">
      
      {/* Background Radial Glow & Sub-polygon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-petrol-500/20 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AnalyticaHouse Dramatic Dark Contrast */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 text-petrol-400" />
            <span>Bölüm 4 — Yetkinliğin Görünür Olması</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
            Yaklaşımın <span className="text-petrol-300">uygulamadaki karşılığı.</span>
          </h2>

          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed font-light">
            İkna gücünü abartılı iddialardan değil, somut işten alıyoruz. Her çalışma aynı net düzeni izler:
          </p>

          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mt-4 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-mono text-petrol-300">
            <span>İhtiyaç</span>
            <span className="text-slate-500">→</span>
            <span>Yapılan Çalışma</span>
            <span className="text-slate-500">→</span>
            <span className="text-white font-bold">Gösterilebilir Çıktı</span>
          </div>
        </motion.div>

        {/* 3 Dark Showcase Cards with Glassmorphism & Hover Glow */}
        <div className="space-y-8">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0D1522]/90 border border-white/10 hover:border-petrol-400/50 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-petrol-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-petrol-500/20 transition-all duration-500" />

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-petrol-500/20 text-petrol-300 flex items-center justify-center border border-petrol-400/30 group-hover:bg-petrol-500 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-petrol-400 font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono font-medium text-slate-300">
                      {item.badge}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-petrol-500/20 border border-petrol-400/30 text-xs font-mono font-bold text-petrol-300">
                      {item.metricVal}
                    </div>
                  </div>
                </div>

                {/* 3 Step Formula in Dark Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  
                  {/* Step 1: Need */}
                  <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      1. İhtiyaç
                    </div>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {item.need}
                    </p>
                  </div>

                  {/* Step 2: Work Done */}
                  <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono font-bold text-petrol-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-petrol-400" />
                      2. Yapılan Çalışma
                    </div>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {item.work}
                    </p>
                  </div>

                  {/* Step 3: Tangible Output */}
                  <div className="space-y-2 p-5 rounded-2xl bg-petrol-950/40 border border-petrol-400/30 shadow-lg">
                    <div className="text-xs font-mono font-bold text-petrol-300 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-petrol-400" />
                      3. Gösterilebilir Çıktı
                    </div>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      {item.output}
                    </p>
                  </div>

                </div>

                {/* Bottom Card Action with AnalyticaHouse Button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
                  <span className="font-mono">Gerçek üretim ve şeffaf teslim standardı</span>
                  <button
                    onClick={() => openWizard()}
                    className="ah-button button-white text-xs py-2 px-4 cursor-pointer"
                  >
                    <span>
                      <span className="text-primary">
                        Benzer Çözüm İçin Ön Değerlendirme <ArrowUpRight className="w-3 h-3 ml-1" />
                      </span>
                      <span className="text-secondary">
                        30 Sn Analizi Başlat <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </span>
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
