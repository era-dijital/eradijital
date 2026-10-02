import React from 'react';
import { Building2, ShoppingBag, Stethoscope, Compass, Cpu } from 'lucide-react';

export default function TargetIndustries() {
  const industries = [
    {
      sector: "B2B İmalat & Sanayi",
      focus: "Yurt Dışı İhracat Talepleri & Fuar Öncesi 3D Doğrulama",
      desc: "Fabrikalar ve makine üreticileri için uluslararası B2B alıcı akışı, dijital katalog ve 3D pazar testleri.",
      icon: Building2
    },
    {
      sector: "E-Ticaret & İhracat Markaları",
      focus: "ROAS Odaklı Çok Kanallı Reklam & Ultra Hızlı Web",
      desc: "Sıfır stokla yeni ürün testi, yüksek dönüşümlü sepet altyapısı ve agresif kitle ölçeklemesi.",
      icon: ShoppingBag
    },
    {
      sector: "Klinik & Sağlık Turizmi",
      focus: "7/24 WhatsApp AI Karşılama & Nitelikli Hasta Randevusu",
      desc: "Avrupa ve Orta Doğu'dan gelen çok dilli hasta taleplerini saniyeler içinde karşılayıp randevuya bağlayan sistem.",
      icon: Stethoscope
    },
    {
      sector: "Mimarlık & Gayrimenkul Projeleri",
      focus: "Fotogerçekçi 3D Görselleştirme & Lansman Kampanyaları",
      desc: "Temeli atılmamış konut ve ticari projeleri 3D ve hedefli reklamlarla alıcılara sunup ön satış toplama.",
      icon: Compass
    },
    {
      sector: "SaaS & B2B Teknoloji",
      focus: "Landing Page A/B Testleri & Süreç Otomasyonu",
      desc: "Demo rezervasyonlarını katlayan, sıfır sürtünmeli modern yazılım tanıtım sayfaları ve CRM köprüleri.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4]/60 dark:bg-[#070a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
            [ SEKTÖREL ÇÖZÜM DERİNLİĞİ ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
            Hangi Sektörlere <span className="hl">Değer Katıyoruz?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Her sektörün dinamikleri ve müşteri karar alma süreçleri farklıdır; terzi usulü çözümler üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div 
                key={ind.sector} 
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 hover:border-orange-500/40 shadow-sm dark:shadow-none hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-white mb-1.5">
                    {ind.sector}
                  </div>
                  <div className="font-mono text-xs text-orange-600 dark:text-orange-400 font-semibold mb-3">
                    {ind.focus}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
