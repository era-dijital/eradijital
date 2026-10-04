import React from 'react';
import { ArrowUpRight, Globe, Target, UserCheck, Cpu, ArrowRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function SolutionsSection() {
  const { openWizard } = useQuoteWizard();

  const solutions = [
    {
      num: "01",
      icon: Globe,
      name: "Dijital varlık ve kurumsal anlatım",
      desc: "Web siteleri, ürün içerikleri ve görsel iletişimle işletmenin dijitalde nasıl temsil edildiğini geliştiriyor.",
      details: ["Web siteleri ve hızlı açılan sayfalar", "Ürün anlatımı ve görsel iletişim", "Güven veren kurumsal dijital kimlik"]
    },
    {
      num: "02",
      icon: Target,
      name: "Görünürlük ve müşteri kazanımı",
      desc: "İçerik, sosyal medya, SEO–GEO ve reklam çalışmalarını hedef kitleye ulaşmak için bir araya getiriyor.",
      details: ["Arama görünürlüğü (SEO & GEO)", "Sosyal medya ve içerik yönetimi", "Hedef kitleye yönelik reklam çalışmaları"]
    },
    {
      num: "03",
      icon: UserCheck,
      name: "Satış ve müşteri ilişkileri",
      desc: "Başvuru, teklif ve müşteri takip sistemleriyle oluşan ilginin daha düzenli yönetilmesini destekliyor.",
      details: ["Teklif ve başvuru takip sistemleri", "Müşteri iletişim ve geri bildirim akışı", "Gelen taleplerin kaçırılmaması"]
    },
    {
      num: "04",
      icon: Cpu,
      name: "Yazılım ve iş süreçleri",
      desc: "Özel uygulamalar, otomasyonlar ve entegrasyonlarla işletmenin dijital işleyişini geliştiriyor.",
      details: ["Manuel tekrarları çözen otomasyonlar", "Sistemler arası veri entegrasyonu", "İşletmeye özel akıllı uygulamalar"]
    }
  ];

  return (
    <section id="gelisim-alanlari" className="py-20 sm:py-24 border-b border-black/5 dark:border-white/5 bg-[#F6F7F4]/60 dark:bg-[#070B10]/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-petrol-700 dark:text-petrol-300 font-semibold block mb-2">
              [ ÇÖZÜM YAKLAŞIMI // GELİŞİM ALANLARI ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white tracking-tight">
              İhtiyaca göre seçilen çözümler. <span className="text-petrol-700 dark:text-petrol-400">Birlikte çalışan bir yapı.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              ERA Dijital, üretim ve teknoloji imkânlarını işletmenin hedeflerine göre kullanıyor. Her çalışma, belirli bir gelişim ihtiyacına karşılık veriyor.
            </p>
          </div>

          <button
            onClick={() => openWizard()}
            className="self-start md:self-auto ah-btn text-xs py-2.5 px-5 cursor-pointer shrink-0"
          >
            <span className="ah-btn-inner">
              <span className="ah-btn-text">
                <span>Ön Değerlendirme İste</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="ah-btn-text">
                <span>İhtiyacınızı Belirleyin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </button>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="ah-card p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400">
                      Gelişim Alanı {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => openWizard()}
                    className="text-xs font-semibold text-petrol-700 dark:text-petrol-400 hover:text-petrol-800 dark:hover:text-petrol-300 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Bu alanda değerlendirme iste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
