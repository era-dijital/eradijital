import React from 'react';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function DeliverablesSection() {
  const { openWizard } = useQuoteWizard();

  const deliverables = [
    {
      category: "DİJİTAL PLATFORM & WEB ÇALIŞMASI",
      title: "Hızlı, Güven Veren ve Teklife Yönlendiren Kurumsal Web Altyapısı",
      need: "Ziyaretçiyi kaçıran hantal vitrin siteleri yerine, doğrudan teklif ve randevuya yönlendiren hızlı bir altyapı.",
      work: "Vite + React & Tailwind CSS ile 0.8s altı açılış hızı, Ramses modeli 30 saniyelik etkileşimli teklif hesaplayıcısı.",
      output: "99/100 hız skoru, sıfır kod yükü ve doğrudan iş talebi üreten çalışan kurumsal web platformu.",
      img: "/resimler/hizmetler/dijital-donusum-danismanligi-analiz.webp",
      alt: "Dönüşüm Odaklı Web ve Platform Çalışması"
    },
    {
      category: "ÜRÜN GÖRSELLEŞTİRMESİ & PRODÜKSİYON",
      title: "Üretim Öncesi 3D Dijital Prototip ve Pazar Doğrulaması",
      need: "Yüksek kalıp ve stok masrafına girmeden önce pazarın satın alma iştahını somut olarak test etmek.",
      work: "Fotogerçekçi 3D modelleme, malzeme simülasyonu ve hedef kitleye yönelik doğrulama içerikleri.",
      output: "Fiziksel üretim riski alınmadan önce doğrulanmış ön talep ve lansmana hazır görsel materyaller.",
      img: "/resimler/kurumsal/prototype-market-test.jpg",
      alt: "3D Modelleme ve Dijital Prototip Doğrulama"
    },
    {
      category: "SÜREÇ OTOMASYONU & MÜŞTERİ KARŞILAMA",
      title: "7/24 Kesintisiz WhatsApp AI Müşteri Asistanı & CRM Akışı",
      need: "Mesai saatleri dışında gelen müşteri mesajlarının gecikmesi veya yanıtsız kalarak kaybolması.",
      work: "WhatsApp & Instagram üzerinde 7/24 çalışan AI yanıt asistanı, otomatik randevu ve CRM köprüsü.",
      output: "<1.2s yanıt süresi, hatasız bilgi aktarımı ve doğrudan yetkiliye iletilen nitelikli başvuru akışı.",
      img: "/resimler/hizmetler/ai-otomasyon-sistemleri-chat.webp",
      alt: "Yapay Zeka Otomasyon ve Canlı Müşteri Karşılama"
    }
  ];

  return (
    <section id="uygulamalar" className="py-20 sm:py-24 border-b border-black/5 dark:border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-petrol-700 dark:text-petrol-300 font-semibold block mb-2">
            [ SOMUT İŞ ÇIKTILARI // YETKİNLİK ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white tracking-tight">
            Yaklaşımın uygulamadaki karşılığı.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Metin vaatleri yerine; gösterilebilir çıktı ve çalışan dijital uygulamalarla işletmenizin ihtiyacına yanıt veriyoruz.
          </p>
        </div>

        {/* Deliverables List (İhtiyaç → Yapılan Çalışma → Gösterilebilir Çıktı) */}
        <div className="space-y-10 sm:space-y-12">
          {deliverables.map((item, idx) => (
            <div
              key={item.category}
              className="ah-card p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Visual Side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/30 shadow-md">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-white backdrop-blur-md border border-white/10">
                      Uygulama 0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side: Need -> Work -> Output */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="font-mono text-xs font-bold text-petrol-700 dark:text-petrol-400 uppercase tracking-wider">
                  {item.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                    <span className="font-semibold text-navy-900 dark:text-white block mb-0.5">İhtiyaç:</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{item.need}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                    <span className="font-semibold text-navy-900 dark:text-white block mb-0.5">Yapılan Çalışma:</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{item.work}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-petrol-500/[0.07] dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/20">
                    <span className="font-semibold text-petrol-800 dark:text-petrol-300 block mb-0.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Gösterilebilir Çıktı:</span>
                    </span>
                    <span className="text-petrol-900 dark:text-petrol-200">{item.output}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openWizard()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-petrol-700 dark:text-petrol-400 hover:text-petrol-800 dark:hover:text-petrol-300 cursor-pointer"
                  >
                    <span>Benzer bir çalışma için ön değerlendirme iste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
