import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function HizmetlerPage() {
  const { openWizard } = useQuoteWizard();

  const modules = [
    {
      code: "SÜTUN 01",
      tag: "KANAL AÇMA & SATIŞ",
      title: "Performans & Çok Kanallı Reklam Yönetimi",
      desc: "Reklam harcamasını zekat gibi bir büyüme yatırımı olarak konumlandırıyoruz. Meta (Instagram & Facebook), Google Ads, YouTube ve Açık Hava (Billboard/Fuar) mecralarını çaprazlayarak işletmenize doğrudan ölçülebilir müşteri akışı sağlıyoruz.",
      features: [
        "ROI & ROAS odaklı bütçe optimizasyonu ve sıfır israf",
        "Remarketing (yeniden hedefleme) ve dinamik kitle segmentasyonu",
        "Açık hava (billboard/fuar) ve dijital reklam çaprazlaması",
        "Haftalık şeffaf büyüme ve dönüşüm raporlaması"
      ],
      img: "/resimler/hizmetler/performans-odakli-dijital-pazarlama.webp",
      alt: "Performans Odaklı Çok Kanallı Reklam Yönetimi - Era Dijital"
    },
    {
      code: "SÜTUN 02",
      tag: "DÖNÜŞÜM ODAKLI MİMARİ",
      title: "Satış Getiren Web & Landing Page Geliştirme",
      desc: "Ziyaretçinin girip çıktığı standart vitrin siteleri artık iş yapmıyor. Modern Vite + React mimarisiyle saniyeler içinde açılan, ziyaretçiyi teklife ve siparişe yönlendiren etkileşimli büyüme motorları inşa ediyoruz.",
      features: [
        "Vite + React & Tailwind CSS ile 0.8s altı sayfa yükleme hızı",
        "Ramses Digital modeli çok adımlı etkileşimli teklif hesaplayıcıları",
        "A/B testli yüksek dönüşümlü Landing Page sayfaları",
        "Tam responsive ve mobil-öncelikli UX/UI mimarisi"
      ],
      img: "/resimler/hizmetler/dijital-donusum-danismanligi.webp",
      alt: "Dönüşüm Odaklı Web ve Landing Page Geliştirme - Era Dijital"
    },
    {
      code: "SÜTUN 03",
      tag: "PAZAR TESTİ & PRESTİJ",
      title: "Görsel Güç, 3D Modelleme & Ürün Lansmanı",
      desc: "Daha fabrikada üretilmemiş yeni bir fikir veya ürünü fotogerçekçi 3D modelleme ve AI video prodüksiyonuyla sanki varmış gibi hedef kitle reklamına çıkarıyoruz. Gerçek satın alma iştahını ölçüp riski sıfırlıyoruz.",
      features: [
        "Fiziksel üretim öncesi 3D prototip ve talep doğrulaması",
        "Fuar ekranları ve büyük LCD panolar için yüksek çözünürlüklü prodüksiyon",
        "Viral sosyal medya video reklamları ve lansman kreatifleri",
        "Katalog kapağı, ambalaj ve kurumsal kimlik entegrasyonu"
      ],
      img: "/resimler/hizmetler/ai-otomasyon-sistemleri-chat.webp",
      alt: "3D Modelleme ve Pazar Doğrulama Hizmetleri - Era Dijital"
    },
    {
      code: "SÜTUN 04",
      tag: "AKILLI OPERASYON & SAAS",
      title: "Yapay Zeka, Süreç Otomasyonu & Sektörel SaaS",
      desc: "Müşteri mesajlarını 7/24 karşılayan WhatsApp AI asistanları, CRM entegrasyonları kuruyoruz. Ayrıca şirketinizin operasyonel açığını çözen özel yazılımlar (SaaS) geliştirerek süreçlerinizi otomatikleştiriyoruz.",
      features: [
        "7/24 kesintisiz çalışan WhatsApp & Instagram AI satış asistanı",
        "HubSpot, Airtable ve muhasebe sistemleriyle iki yönlü CRM köprüleri",
        "Otomatik randevu, ön rezervasyon ve sipariş kilit mekanizmaları",
        "Sektörel ölçeklenebilir ve lisanslanabilir özel SaaS platformları"
      ],
      img: "/resimler/dijital-donusum-surecimiz/ai-kurulumu.webp",
      alt: "Yapay Zeka ve Sektörel SaaS Çözümleri - Era Dijital"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f4] dark:bg-[#070b10] text-zinc-900 dark:text-slate-100 selection:bg-petrol-600 selection:text-white transition-colors duration-250">
      <SEO 
        title="Büyüme Hizmetlerimiz & Sütunlarımız | Era Dijital"
        description="Performans reklamları, dönüşüm odaklı web siteleri, 3D pazar testleri ve yapay zekâ süreç otomasyonu ile işletmenizi büyütüyoruz."
      />

      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 sm:py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] relative overflow-hidden transition-colors duration-250">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-petrol-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-petrol-500/10 border border-petrol-500/25 text-petrol-700 dark:text-petrol-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-petrol-500" />
                <span>360° BÜYÜME MİMARİSİ</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Ölçülebilir Büyüme Sağlayan <span className="hl">Hizmet Sütunlarımız</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Parça pinçik servisler yerine; reklamdan web sitesine, 3D pazar testinden yapay zekâ otomasyonuna kadar satış kanallarınızı açan entegre bir büyüme ortaklığı sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {modules.map((m, idx) => (
              <div 
                key={m.code}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold bg-petrol-500/10 px-2.5 py-1 rounded-md border border-petrol-500/20">
                      {m.code}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
                      {m.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                    {m.title}
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {m.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold block">
                      [KAPSAM & KAZANIMLAR]
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                          <Check className="w-4 h-4 text-petrol-600 dark:text-petrol-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => openWizard()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-petrol-600 hover:bg-petrol-700 shadow-lg shadow-petrol-600/20 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Bu Alanda Ücretsiz Analiz İsteyin</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Visual / Image Side */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] p-2 shadow-xl dark:shadow-none group">
                    <img 
                      src={m.img} 
                      alt={m.alt}
                      className="w-full h-auto object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 border-t border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] transition-colors duration-250">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider block">
              [ TERZİ USULÜ YATIRIM // STANDART PAKETLER YOKTUR ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
              İşletmenizin Hangi Büyüme Sütununa İhtiyacı Var?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Her firmanın dinamikleri, kitle alışkanlıkları ve darboğazları farklıdır. 30 saniyelik testimizi çözün, 24 saat içinde işletmenize özel büyüme reçetenizi çıkaralım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openWizard()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-petrol-600 hover:bg-petrol-700 shadow-xl shadow-petrol-600/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                30 Saniyede Büyüme Analizini Başlat →
              </button>
              <Link
                to="/on-analiz"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-colors"
              >
                Detaylı Röntgen Formu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
