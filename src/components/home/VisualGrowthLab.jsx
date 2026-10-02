import React from 'react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function VisualGrowthLab() {
  const { openWizard } = useQuoteWizard();

  const visualDeliverables = [
    {
      id: "roas-telemetry",
      tag: "PERFORMANS & CİRO",
      badge: "ROAS 4.9x",
      title: "Çok Kanallı Reklam & Gelir Telemetrisi",
      desc: "Meta Ads, Google Search ve YouTube reklamlarını tek bir dinamik atıf modelinde birleştiriyoruz. Reklam bütçenizi körlemesine harcamak yerine her bir kuruşun getirdiği ciroyu haftalık canlı panellerle takip ediyoruz.",
      metrics: [
        { label: "ROAS Çarpanı", value: "4.9x" },
        { label: "Dönüşüm Artışı", value: "+%42.8" },
        { label: "Kanal Entegrasyonu", value: "360° Omnichannel" }
      ],
      img: "/resimler/kurumsal/growth-telemetry-dashboard.jpg",
      alt: "Era Dijital Çok Kanallı Reklam ve ROAS Büyüme Telemetrisi"
    },
    {
      id: "3d-market-test",
      tag: "PAZAR TESTİ & PROTO",
      badge: "SIFIR STOK RİSKİ",
      title: "Üretime Girmeden 3D & AI ile Talep Doğrulama",
      desc: "Fabrikada yüksek kalıp ve stok maliyetlerine girmeden önce; ürününüzü fotogerçekçi 3D modelleme ile görselleştirip hedef kitleye test reklamı çıkıyoruz. Gerçek sipariş iştahını ölçüp sermayenizi güvenceye alıyoruz.",
      metrics: [
        { label: "Ön Talep Hızı", value: "5 Günde 240+" },
        { label: "Pazar Kabul Skoru", value: "%88 Pozitif" },
        { label: "Maliyet Riski", value: "Sıfır Kalıp İsrafı" }
      ],
      img: "/resimler/kurumsal/prototype-market-test.jpg",
      alt: "3D Modelleme ve Üretim Öncesi Pazar Doğrulama - Era Dijital"
    },
    {
      id: "web-conversion",
      tag: "DÖNÜŞÜM MİMARİSİ",
      badge: "<0.8s YÜKLEME",
      title: "Satış Getiren Yüksek Hızlı Web Altyapısı",
      desc: "Ziyaretçinin girip çıktığı standart vitrin siteleri artık iş yapmıyor. Vite + React mimarisiyle saniyeler içinde açılan, Ramses modeli 30 saniyelik etkileşimli teklif hesaplayıcılarıyla ziyaretçiyi anında müşteriye dönüştüren siteler inşa ediyoruz.",
      metrics: [
        { label: "Sayfa Hızı", value: "0.8s Altı" },
        { label: "Lighthouse Skoru", value: "99 / 100" },
        { label: "Lead Dönüşümü", value: "3.2 Kat Artış" }
      ],
      img: "/resimler/hizmetler/dijital-donusum-danismanligi-analiz.webp",
      alt: "Dönüşüm Odaklı Web ve Landing Page Geliştirme - Era Dijital"
    },
    {
      id: "ai-operations",
      tag: "OTONOM OPERASYON",
      badge: "7/24 KESİNTİSİZ",
      title: "7/24 WhatsApp AI Asistanı & Sektörel SaaS",
      desc: "Gelen müşteri mesajlarını mesai saatlerine takılmadan saniyeler içinde karşılayan yapay zekâ asistanları, CRM entegrasyonları ve şirketinize kalıcı değer katan özel lisanslanabilir yazılımlar (SaaS) geliştiriyoruz.",
      metrics: [
        { label: "Yanıt Süresi", value: "<1.2 Saniye" },
        { label: "Haftalık Çalışma", value: "7/24 Kesintisiz" },
        { label: "Müşteri Kaçırma", value: "%0 Kayıp" }
      ],
      img: "/resimler/hizmetler/ai-otomasyon-sistemleri-chat.webp",
      alt: "Yapay Zeka ve Sektörel SaaS Süreç Çözümleri - Era Dijital"
    }
  ];

  return (
    <section className="py-24 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
              [ SOMUT ÇIKTILAR & GÖRSEL KANIT ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
              Sözde Değil, Ekranda ve Sahada <span className="hl">Gerçek Çıktılar</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3">
              Gerçek veri telemetrileri, 3D fiziksel ürün prototip testleri, 0.8s ultra hızlı web altyapısı ve 7/24 yapay zekâ entegrasyonlarımızla işletmenize sunduğumuz somut değer.
            </p>
          </div>

          <button
            onClick={() => openWizard()}
            className="self-start md:self-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all cursor-pointer"
          >
            İşletmenizin Planını Çıkarın →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {visualDeliverables.map((item) => (
            <div 
              key={item.id}
              className="rounded-3xl bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-none hover:border-orange-500/40 transition-all flex flex-col justify-between group"
            >
              {/* Visual Image Banner with Subtle Overlays */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5 dark:bg-black/30 border-b border-black/5 dark:border-white/5">
                <img 
                  src={item.img} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md bg-zinc-900/80 backdrop-blur-md text-white border border-white/10 uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-md bg-orange-600 text-white shadow-md uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2.5 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Metric Highlights Strip */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/5 dark:border-white/5 text-center">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                      <div className="font-display font-bold text-sm sm:text-base text-zinc-900 dark:text-white">{m.value}</div>
                      <div className="font-mono text-[9px] text-zinc-500 dark:text-zinc-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
